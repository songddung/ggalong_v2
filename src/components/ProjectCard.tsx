"use client";

import React from "react";
import { ExternalLink, Github, Code, Database, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import TechBadge from "./TechBadge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ▼▼▼ 인터페이스 정의 ▼▼▼
interface TroubleshootingItem {
  problem: string;
  solution: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  troubleshooting?: TroubleshootingItem[];
  retrospect?: string;
  duration?: string;
}
// ▲▲▲ 인터페이스 정의 ▲▲▲

interface ProjectCardProps {
  project: Project;
}

const techIcons: { [key: string]: React.ReactNode } = {
  "Node.js": <Server className="w-4 h-4" />,
  NestJS: <Code className="w-4 h-4" />,
  PostgreSQL: <Database className="w-4 h-4" />,
  Redis: <Database className="w-4 h-4" />,
  AWS: <Server className="w-4 h-4" />,
  Docker: <Server className="w-4 h-4" />,
  Kubernetes: <Server className="w-4 h-4" />,
  Prisma: <Database className="w-4 h-4" />,
  'React Native': <Code className="w-4 h-4" />,
  'React': <Code className="w-4 h-4" />,
  'Flutter': <Code className="w-4 h-4" />,
  'TypeScript': <Code className="w-4 h-4" />,
  'Websocket': <Code className="w-4 h-4" />,
  'Zustand': <Code className="w-4 h-4" />,
  'Tanstack Query': <Code className="w-4 h-4" />,
};

const renderWithLineBreaks = (text: string) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <Card className="flex flex-col h-full group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader className="grow">
          <CardTitle className="flex items-start justify-between gap-2">
            <span className="leading-tight">{renderWithLineBreaks(project.title)}</span>
            <div className="flex gap-1 shrink-0">
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              {project.liveUrl && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </CardTitle>
          <CardDescription className="line-clamp-3 mt-2 whitespace-pre-line">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} icon={techIcons[tech]} />
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs text-muted-foreground self-center">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={`/project/${project.id}`}>문제 해결 상세 보기</a>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;