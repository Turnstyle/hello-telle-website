/**
 * Analytics utility for tracking events and page views
 */
type AnalyticsProperties = Record<string, unknown>;

interface AnalyticsEvent {
  event: string;
  properties?: AnalyticsProperties;
  userId?: string;
}

class Analytics {
  private userId: string | null = null;
  private sessionId: string;

  constructor() {
    this.sessionId = Math.random().toString(36).substr(2, 9);
  }

  identify(userId: string, traits?: AnalyticsProperties) {
    this.userId = userId;
    console.log('[Analytics] Identify:', { userId, traits });
  }

  track(event: string, properties?: AnalyticsProperties) {
    const payload: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
      },
      userId: this.userId || undefined,
    };

    console.log('[Analytics] Track:', payload);
  }

  page(name: string, properties?: AnalyticsProperties) {
    this.track('Page View', {
      pageName: name,
      ...properties,
    });
  }

  reset() {
    this.userId = null;
    console.log('[Analytics] Reset');
  }
}

export const analytics = new Analytics();
