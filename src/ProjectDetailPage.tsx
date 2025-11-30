import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Project } from './components/ProjectCard';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { ArrowLeft, Code, Wrench, Zap, CheckCircle } from 'lucide-react';
import TechBadge from './components/TechBadge'; import { Calendar } from 'lucide-react';

interface ProjectDetailPageProps {
    projects: Project[];
}

const techIcons: { [key: string]: React.ReactNode } = {
    "Node.js": <Code className="w-4 h-4" />,
    NestJS: <Code className="w-4 h-4" />,
    PostgreSQL: <Code className="w-4 h-4" />,
    Redis: <Code className="w-4 h-4" />,
    AWS: <Code className="w-4 h-4" />,
    Docker: <Code className="w-4 h-4" />,
    Kubernetes: <Code className="w-4 h-4" />,
    Prisma: <Code className="w-4 h-4" />,
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

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projects }) => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="text-center py-20">프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
            <div className="mb-8">
                <Button variant="ghost" asChild>
                    <Link to="/#projects">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        모든 프로젝트 보기
                    </Link>
                </Button>
            </div>
            <br />
            {/* ▼▼▼ [수정됨] 전체 레이아웃 및 디자인 개선 ▼▼▼ */}
            <div className="space-y-8">
                {/* --- 헤더 카드 --- */}
                <Card className="overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
                            {renderWithLineBreaks(project.title)}
                        </CardTitle>
                        {/* ▼▼▼ [수정됨] 기간 표시 추가 ▼▼▼ */}
                        {project.duration && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <Calendar size={14} />
                                <span>{project.duration}</span>
                            </div>
                        )}
                        <div className="pt-2 text-md text-muted-foreground">
                            {project.longDescription}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <TechBadge key={tech} tech={tech} icon={techIcons[tech]} variant="outline" />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* --- 본문 그리드 --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* --- 트러블 슈팅 카드 --- */}
                    {project.troubleshooting && project.troubleshooting.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Wrench className="w-5 h-5 text-primary" />
                                    트러블 슈팅
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {project.troubleshooting.map((item, index) => (
                                    <div key={index} className="bg-muted/40 rounded-md border text-sm" style={{ padding: '1rem' }}>
                                        <div className="flex items-start gap-3 mb-3">
                                            <Zap size={16} className="text-red-400 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-red-400">Problem</p>
                                                <p className="text-muted-foreground">{item.problem}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 mb-3">
                                            <Wrench size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-yellow-400">Solution</p>
                                                <p className="text-muted-foreground">{item.solution}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-green-400">Result</p>
                                                <p className="text-muted-foreground">{item.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}

                    {/* --- 개발 회고 카드 --- */}
                    {project.retrospect && (
                        <Card className="lg:col-start-2">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className="w-5 h-5 text-primary" />
                                    개발 회고
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {renderWithLineBreaks(project.retrospect)}
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;