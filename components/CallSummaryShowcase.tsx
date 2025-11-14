/**
 * Showcase component for displaying call summaries with navigation
 */
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CallSummaryCard } from './CallSummaryCard';
import { sampleCallSummaries } from '@/data/sampleCallSummaries';

export function CallSummaryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? sampleCallSummaries.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sampleCallSummaries.length - 1 ? 0 : prev + 1));
  };

  const scenarios = [
    { label: 'Cheerful Day', description: 'Positive conversation about hobbies and family' },
    { label: 'Health Check', description: 'Mild concern detected and flagged' },
    { label: 'Reminiscing', description: 'Engaging memories and nostalgia' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base w-full sm:w-auto ${
              currentIndex === index
                ? 'bg-cornflower-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm'
            }`}
          >
            <div className="font-semibold">{scenario.label}</div>
            <div className={`text-xs mt-0.5 ${currentIndex === index ? 'text-cornflower-100' : 'text-slate-500'}`}>
              {scenario.description}
            </div>
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sampleCallSummaries.map((summary) => (
              <div key={summary.id} className="w-full flex-shrink-0">
                <CallSummaryCard summary={summary} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cornflower-500"
          aria-label="Previous summary"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cornflower-500"
          aria-label="Next summary"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 pt-4">
        {sampleCallSummaries.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              currentIndex === index ? 'bg-cornflower-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to summary ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-sm text-slate-600">
          <span className="font-medium">Real examples</span> of the simple, high-level updates you&rsquo;ll receive to stay informed
          and reassured
        </p>
      </div>
    </div>
  );
}
