import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import TechBadge from './TechBadge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  apiEndpoints?: {
    method: string;
    endpoint: string;
    description: string;
  }[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const techIcons: { [key: string]: React.ReactNode } = {
    'Node.js': <Server className="w-4 h-4" />,
    'NestJS': <Code className="w-4 h-4" />,
    'PostgreSQL': <Database className="w-4 h-4" />,
    'Docker': <Server className="w-4 h-4" />,
    'AWS': <Server className="w-4 h-4" />,
    'Prisma': <Database className="w-4 h-4" />,
  };

  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            {project.liveUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
              icon={techIcons[tech]}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
        >
          {isExpanded ? 'API 세부사항 숨기기' : 'API 세부사항 보기'}
        </Button>

        {isExpanded && (
          <div className="space-y-3 pt-3 border-t border-border animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div>
              <h4 className="font-semibold mb-2">프로젝트 상세</h4>
              <p className="text-sm text-muted-foreground">
                {project.longDescription}
              </p>
            </div>

            {project.apiEndpoints && (
              <div>
                <h4 className="font-semibold mb-2">API 엔드포인트</h4>
                <div className="space-y-2">
                  {project.apiEndpoints.map((endpoint, index) => (
                    <div key={`${project.id}-endpoint-${index}`} className="bg-muted/50 p-3 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded text-xs font-mono ${endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                              endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                          }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-xs text-muted-foreground">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
export type { Project };