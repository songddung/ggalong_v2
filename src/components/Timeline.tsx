import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex items-start space-x-6">
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center ring-4 ring-background">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.period}
                  </div>
                </div>
                
                <div className="flex items-center text-primary font-medium mb-2">
                  <span>{item.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
export type { TimelineItem };