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
    moodDescription:
      'Upbeat and engaged throughout the conversation. Her tone was warm and animated when discussing family and her hobbies.',
    topics: ['Gardening', 'Family', 'Upcoming Visit', 'Weekend Plans'],
    generalNotes:
      "Helen shared excitement about her tomato plants ripening and is looking forward to her granddaughter visiting this weekend. She mentioned finishing a mystery novel from her book club and plans to bake her famous apple pie for the family gathering.",
    quote: "I can't wait to see little Emma's face when she tries my apple pie. She's never had it before!",
  },
  {
    id: '2',
    date: 'Wednesday, Nov 6',
    time: '2:30 PM',
    duration: '15 min conversation',
    mood: 'neutral',
    moodDescription:
      'Generally calm but expressed some concern about memory and routines. Her energy level seemed lower than usual.',
    topics: ['Doctor Appointment', 'Memory', 'Medications', 'Daily Routine'],
    generalNotes:
      "Helen discussed her upcoming doctor appointment next Thursday at 3 PM. She talked about reorganizing her pill organizer to make medication management easier and mentioned feeling more tired than usual lately.",
    quote: "Sometimes I look at my pill box and can't remember if I already took them. Maybe I should set an alarm.",
    alert: {
      type: 'warning',
      message:
        'Helen mentioned forgetting medications multiple times and increased fatigue. Consider following up about medication management and scheduling a check-in after her doctor appointment.',
    },
  },
  {
    id: '3',
    date: 'Friday, Nov 8',
    time: '9:00 AM',
    duration: '18 min conversation',
    mood: 'positive',
    moodDescription:
      'Warm and nostalgic. Her voice brightened noticeably when talking about music and memories with her late husband.',
    topics: ['Childhood Memories', 'Dancing', 'Music', 'Husband'],
    generalNotes:
      "Helen reminisced about dancing with her late husband at their favorite jazz club in the 1960s. She shared stories about learning to swing dance and winning a local competition. An old Frank Sinatra song on the radio brought back happy memories, and she mentioned that music still makes her want to move at 82.",
    quote: "When Frank Sinatra comes on, I close my eyes and I'm 25 again, dancing with my Henry. Those were the days.",
    alert: {
      type: 'info',
      message:
        "Helen was very engaged and nostalgic today. She particularly lit up when discussing music and dancing. Consider suggesting a playlist of her favorite 1960s songs or looking into senior dance classes in her area.",
    },
  },
];
