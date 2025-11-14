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
  moodDescription: string;
  topics: string[];
  generalNotes: string;
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
      <div className="pb-6 border-b border-slate-200">
        <h3 className="font-bold text-lg text-slate-900 mb-4">Call Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-slate-700">
            <Calendar className="w-4 h-4 text-cornflower-600" />
            <span className="text-sm">{summary.date}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Clock className="w-4 h-4 text-cornflower-600" />
            <span className="text-sm">{summary.time}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <MessageCircle className="w-4 h-4 text-cornflower-600" />
            <span className="text-sm">{summary.duration}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 flex items-center gap-2 mb-3">
          {getMoodIcon()}
          Overall Mood
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {getMoodLabel()}
          </span>
        </h4>
        <p className="text-slate-700 leading-relaxed">{summary.moodDescription}</p>
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
        <h4 className="font-semibold text-slate-900 mb-3">General Notes</h4>
        <p className="text-slate-700 leading-relaxed">{summary.generalNotes}</p>
      </div>

      {summary.quote && (
        <div className="bg-gradient-to-br from-cornflower-50 to-cornflower-50 rounded-xl p-5">
          <div className="flex gap-3">
            <Quote className="w-5 h-5 text-cornflower-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-700 italic leading-relaxed mb-2">
                &ldquo;{summary.quote}&rdquo;
              </p>
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
              <h5 className="font-semibold text-slate-900 mb-2">Any Noteworthy Concerns</h5>
              <p className="text-slate-700 mb-3">{summary.alert.message}</p>
              <p className="text-xs text-slate-500 italic">
                HelloTelle is not a medical or emergency service — we simply help you stay aware and connected.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
