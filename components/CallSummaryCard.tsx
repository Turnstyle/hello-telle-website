/**
 * Call summary card component displaying conversation insights
 */
import { Calendar, Clock, MessageCircle, Tag, Quote, AlertCircle, Smile, Meh, Frown } from 'lucide-react';
import { Badge } from './ui/Badge';

export interface CallSummary {
  id: string;
  date: string;
  time: string;
  duration: string;
  mood: 'positive' | 'neutral' | 'concerned';
  moodScore: number;
  topics: string[];
  highlights: string[];
  quote?: string;
  alert?: {
    type: 'info' | 'warning';
    message: string;
  };
}

interface CallSummaryCardProps {
  summary: CallSummary;
}

export function CallSummaryCard({ summary }: CallSummaryCardProps) {
  const getMoodIcon = () => {
    switch (summary.mood) {
      case 'positive':
        return <Smile className="w-6 h-6 text-cornflower-600" />;
      case 'neutral':
        return <Meh className="w-6 h-6 text-amber-500" />;
      case 'concerned':
        return <Frown className="w-6 h-6 text-butter-600" />;
    }
  };

  const getMoodColor = () => {
    switch (summary.mood) {
      case 'positive':
        return 'bg-cornflower-500';
      case 'neutral':
        return 'bg-amber-400';
      case 'concerned':
        return 'bg-butter-500';
    }
  };

  const getMoodLabel = () => {
    switch (summary.mood) {
      case 'positive':
        return 'Cheerful & Engaged';
      case 'neutral':
        return 'Reflective';
      case 'concerned':
        return 'Needs Attention';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-cornflower-100 to-cornflower-100 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-cornflower-700" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Call Summary</h3>
            <div className="flex items-center gap-3 text-sm text-slate-600 mt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {summary.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {summary.time}
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg self-start sm:self-auto">
          {summary.duration}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
            {getMoodIcon()}
            Overall Mood
          </h4>
          <span className="text-sm font-medium text-slate-700">{getMoodLabel()}</span>
        </div>
        <div className="bg-slate-100 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${getMoodColor()} rounded-full transition-all duration-500`}
            style={{ width: `${summary.moodScore}%` }}
          />
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 flex items-center gap-2 mb-3">
          <Tag className="w-5 h-5 text-cornflower-600" />
          Topics Discussed
        </h4>
        <div className="flex flex-wrap gap-2">
          {summary.topics.map((topic, index) => (
            <Badge key={index} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 mb-3">Conversation Highlights</h4>
        <ul className="space-y-2">
          {summary.highlights.map((highlight, index) => (
            <li key={index} className="flex gap-2 text-slate-700">
              <span className="text-cornflower-600 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {summary.quote && (
        <div className="bg-gradient-to-br from-cornflower-50 to-cornflower-50 rounded-xl p-5">
          <div className="flex gap-3">
            <Quote className="w-5 h-5 text-cornflower-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-700 italic leading-relaxed mb-2">"{summary.quote}"</p>
              <p className="text-sm text-slate-600">Memorable moment from the call</p>
            </div>
          </div>
        </div>
      )}

      {summary.alert && (
        <div
          className={`rounded-xl p-5 ${
            summary.alert.type === 'warning'
              ? 'bg-butter-50 border border-butter-200'
              : 'bg-blue-50 border border-blue-200'
          }`}
        >
          <div className="flex gap-3">
            <AlertCircle
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                summary.alert.type === 'warning' ? 'text-butter-600' : 'text-blue-600'
              }`}
            />
            <div>
              <h5 className="font-semibold text-slate-900 mb-1">
                {summary.alert.type === 'warning' ? 'Attention Needed' : 'Notable Mention'}
              </h5>
              <p className="text-slate-700">{summary.alert.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

