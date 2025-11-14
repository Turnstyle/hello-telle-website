/**
 * Careers page with job listings
 */
import { MapPin, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Navigation } from '@/components/Navigation';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Join Our Mission</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Help us build technology that brings families closer together and gives seniors the companionship they deserve.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-center mb-12">Open Positions</h2>
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div key={index} className="card-hover">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <Badge variant="info">{job.type}</Badge>
                        </div>
                      </div>
                      <button className="btn-primary whitespace-nowrap">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8 bg-gradient-to-br from-cornflower-50 to-white text-center">
              <h3 className="text-2xl font-bold mb-4">Don&rsquo;t see a perfect fit?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We&rsquo;re always looking for talented, passionate people. Send us your resume and tell us how you&rsquo;d like to contribute.
              </p>
              <a href="mailto:careers@hellotelle.com" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

