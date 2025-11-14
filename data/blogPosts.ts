/**
 * Blog post content shared between blog list and detail pages
 */
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  category: string;
  cardImage: string;
  heroImage: string;
  imageAlt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Gentle Signs Your Loved One May Need More Connection',
    excerpt: 'Small, human signals to listen for—and compassionate ways to respond without pressure or guilt.',
    author: 'Dr. Sarah Chen',
    authorTitle: 'Gerontologist & Senior Care Specialist',
    date: 'Nov 5, 2024',
    readTime: '6 min read',
    category: 'Caregiving Tips',
    cardImage: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Older adult smiling while video chatting with family on tablet',
    content: {
      introduction:
        "When you're loving someone from a distance, it's natural to wonder how they're really doing. Instead of looking for 'warning signs,' it can help to notice small, human signals that your loved one may be craving more connection—and to respond in gentle, sustainable ways that respect their dignity (and your bandwidth).",
      sections: [
        {
          heading: '1. Reaching Out Less Often',
          content:
            "Maybe they used to text or call you first, and now they wait for your call—or their messages feel shorter than before. That slow drift doesn't mean something is 'wrong'; it may simply be a cue that extra warmth and routine contact could help them feel more connected.",
        },
        {
          heading: '2. Skipping Things They Usually Enjoy',
          content:
            "If your loved one talks less about their book club, faith community, card games, or favorite shows, it may be a sign they need a gentler path back into connection. Try asking about what they’re enjoying lately—without pressure to 'get back out there.'",
        },
        {
          heading: '3. A Quieter Tone or Lower Energy',
          content:
            "You might notice their voice sounds a little flatter, or stories come with fewer details. Rather than pushing for more, consider adding small, predictable moments of companionship—quick check-ins, short calls, or friendly chats that meet them where they are.",
        },
        {
          heading: '4. Letting Little Things Slide',
          content:
            "If the house looks a bit more cluttered than usual or routines feel a little off, it may just reflect a stretch of low motivation. A gentle nudge—and a warm conversation that feels easy and unrushed—can help more than a checklist.",
        },
        {
          heading: '5. Forgetfulness or Losing the Thread',
          content:
            "If conversations skip around more than usual or dates get mixed up now and then, consider adding light cognitive engagement through friendly chats, stories, and check-ins that keep the mind active—without making it feel like a test.",
        },
        {
          heading: 'How HelloTelle Helps (Gently)',
          content:
            "• Friendly phone check-ins that feel like natural conversation\n• Thoughtful summaries that keep you calmly informed\n• Soft awareness of mood and routine shifts—shared with care and context",
        },
      ],
      conclusion:
        'Connection doesn’t have to be complicated. With small, consistent touchpoints—and gentle help in the background—your loved one can feel more included, more engaged, and more themselves. HelloTelle listens, learns, and brings you closer.',
    },
  },
  {
    id: 2,
    title: 'Keeping the Human Heart in Tech‑Enabled Care',
    excerpt:
      'Technology should make connection easier, not colder. Here’s how to keep conversations warm while getting helpful support in the background.',
    author: 'Michael Torres',
    authorTitle: 'Digital Health Writer & Researcher',
    date: 'Nov 1, 2024',
    readTime: '8 min read',
    category: 'Technology',
    cardImage:
      'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Caregiver helping a smiling senior woman with a tablet',
    content: {
      introduction:
        'Technology can make care feel colder—or it can make connection easier. For families, what matters most is simple: conversations that feel human, with gentle support running quietly in the background. Here’s our people‑first approach to tech‑enabled care.',
      sections: [
        {
          heading: 'A Companion That Listens',
          content:
            'The most meaningful support starts with a real conversation. Tools can help remember what matters—favorite stories, routines, milestones—so chats feel warm and personal rather than scripted. The goal isn’t to replace anyone; it’s to be a steady, friendly presence between family calls.',
        },
        {
          heading: 'Data With a Human Touch',
          content:
            'Awareness should feel respectful, not clinical. We focus on gentle cues—tone, energy, routine—shared in simple, digestible summaries. Insights are meant to reduce worry and strengthen your own conversations, not overwhelm you with dashboards.',
        },
        {
          heading: 'Quietly Supportive, Never Intrusive',
          content:
            'For the sandwich generation, reliability matters. Gentle check‑ins keep loved ones connected between your calls, while brief, thoughtful updates offer reassurance without adding to your to‑do list. Always supportive. Never a substitute for you.',
        },
        {
          heading: 'How HelloTelle Helps',
          content:
            '• Warm, natural phone conversations—no apps for your loved one\n• Remembers what matters so each call feels personal\n• Short, kind summaries that bring you closer',
        },
      ],
      conclusion:
        'Good technology should feel almost invisible—just enough support to make connection easier. HelloTelle listens, learns, and brings you closer.',
    },
  },
  {
    id: 3,
    title: 'Breaking the Caregiver Guilt Cycle',
    excerpt:
      'A gentler, more sustainable way to care for your loved one—and yourself—without carrying the weight of guilt.',
    author: 'Jennifer Martinez',
    authorTitle: 'Licensed Family Therapist',
    date: 'Oct 28, 2024',
    readTime: '7 min read',
    category: 'Mental Health',
    cardImage:
      'https://images.pexels.com/photos/7551640/pexels-photo-7551640.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/7551640/pexels-photo-7551640.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Adult daughter hugging her senior mother in a cozy living room',
    content: {
      introduction:
        'If you’re caring from a distance, you may know the questions all too well: ‘Am I calling enough? Visiting enough? Doing enough?’ Guilt doesn’t create better care—it just makes love feel heavier. There’s a gentler way forward that protects your energy and still keeps your loved one close.',
      sections: [
        {
          heading: 'Guilt vs. Care',
          content:
            "Guilt often masquerades as love, but they're not the same. Guilt keeps you up at night replaying all the things you 'should' be doing. Care is grounded, intentional, and sustainable. It's better to show up consistently—emotionally and practically—than sporadically and with resentment or exhaustion.",
        },
        {
          heading: 'Setting Boundaries is Not Selfish',
          content:
            'Healthy boundaries are an act of love. They allow you to support your loved one without burning out. Maybe you can’t fly in every month, but you can join their doctor calls virtually. Maybe you can’t call every day, but you can set up meaningful weekly check-ins—supplemented by services like HelloTelle that keep them connected and reassured in between.',
        },
        {
          heading: 'Find Your Team',
          content:
            "Caregiving isn't meant to be done alone. Whether you rely on siblings, neighbors, in-home caregivers, or tech-enabled companionship, building a circle of support protects both you and your loved one. The people who love you want you to have a life, too.",
        },
      ],
      conclusion:
        'You’re not doing this alone. With clear boundaries, small sustainable routines, and a little help in the background, you can show up with more presence and less pressure. HelloTelle offers gentle check‑ins and simple updates—reassurance without the burden.',
    },
  },
];

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

