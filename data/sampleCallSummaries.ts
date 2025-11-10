/**
 * Sample call summary data for demonstration
 */
import { CallSummary } from '@/components/CallSummaryCard';

export const sampleCallSummaries: CallSummary[] = [
  {
    id: '1',
    date: 'Monday, Nov 4',
    time: '10:15 AM',
    duration: '12 min conversation',
    mood: 'positive',
    moodScore: 90,
    topics: ['Gardening', 'Family', 'Upcoming Visit', 'Weekend Plans'],
    highlights: [
      'Excited about her tomato plants finally ripening after the recent warm weather',
      'Looking forward to her granddaughter visiting this weekend',
      'Mentioned she finished reading the mystery novel her book club recommended',
      'Planning to bake her famous apple pie for the family gathering',
    ],
    quote: 'I can\'t wait to see little Emma\'s face when she tries my apple pie. She\'s never had it before!',
  },
  {
    id: '2',
    date: 'Wednesday, Nov 6',
    time: '2:30 PM',
    duration: '15 min conversation',
    mood: 'neutral',
    moodScore: 65,
    topics: ['Doctor Appointment', 'Memory', 'Medications', 'Daily Routine'],
    highlights: [
      'Discussed her upcoming doctor appointment next Thursday at 3 PM',
      'Mentioned forgetting to take her evening medication twice last week',
      'Talked about reorganizing her pill organizer to make it easier to remember',
      'Shared that she\'s been feeling a bit more tired than usual lately',
    ],
    quote: 'Sometimes I look at my pill box and can\'t remember if I already took them. Maybe I should set an alarm.',
    alert: {
      type: 'warning',
      message: 'Helen mentioned forgetting medications multiple times and increased fatigue. Consider following up about medication management and scheduling a check-in after her doctor appointment.',
    },
  },
  {
    id: '3',
    date: 'Friday, Nov 8',
    time: '9:00 AM',
    duration: '18 min conversation',
    mood: 'positive',
    moodScore: 85,
    topics: ['Childhood Memories', 'Dancing', 'Music', 'Husband'],
    highlights: [
      'Reminisced about dancing with her late husband at their favorite jazz club in the 1960s',
      'Shared stories about learning to swing dance and winning a local competition',
      'Mentioned hearing an old Frank Sinatra song on the radio that brought back memories',
      'Talked about how music still makes her want to move, even at 82',
    ],
    quote: 'When Frank Sinatra comes on, I close my eyes and I\'m 25 again, dancing with my Henry. Those were the days.',
    alert: {
      type: 'info',
      message: 'Helen was very engaged and nostalgic today. She particularly lit up when discussing music and dancing. Consider suggesting a playlist of her favorite 1960s songs or looking into senior dance classes in her area.',
    },
  },
];

