import { Download, Github, Linkedin, Mail, Code, Database, Server, Cloud, ArrowRight, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard, { Project } from './components/ProjectCard';
import Timeline, { TimelineItem } from './components/Timeline';
import TechBadge from './components/TechBadge';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Separator } from './components/ui/separator';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import tistoryIcon from './assets/tistory.png';
import profileImage from './assets/hyunkwang.jpg';
import portfolioPdf from './assets/portfolio.pdf';

export default function App() {
  // 프로젝트 정보
  const projects: Project[] = [
    {
      id: '1',
      title: 'PAI(Parent & I) 아이 질문 기반 지능형 추천 시스템',
      description: '대규모 전자상거래를 위한 RESTful API 및 마이크로서비스',
      longDescription: '고성능 Node.js와 NestJS를 사용하여 구축된 확장 가능한 전자상거래 플랫폼입니다. Redis 캐싱, JWT 인증, Prisma ORM을 통한 효율적인 데이터베이스 관리를 포함합니다.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5MjEyNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/username/ecommerce-api',
      liveUrl: 'https://api.ecommerce-demo.com',
      apiEndpoints: [
        { method: 'GET', endpoint: '/api/products', description: '모든 제품 조회' },
        { method: 'POST', endpoint: '/api/orders', description: '새 주문 생성' },
        { method: 'PUT', endpoint: '/api/users/{id}', description: '사용자 정보 업데이트' },
        { method: 'DELETE', endpoint: '/api/products/{id}', description: '제품 삭제' },
      ],
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Manager',
      description: 'AWS 리소스를 관리하는 클라우드 자동화 도구',
      longDescription: 'AWS 인프라를 자동으로 프로비저닝하고 관리하는 도구입니다. Terraform과 연동되어 IaC(Infrastructure as Code) 원칙을 따르며, CloudWatch 모니터링과 자동 스케일링을 지원합니다.',
      image: 'https://images.unsplash.com/photo-1735715606137-b1f47142f7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzU5MTUzNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Node.js', 'AWS', 'Docker', 'Terraform', 'CloudWatch'],
      githubUrl: 'https://github.com/username/cloud-manager',
      apiEndpoints: [
        { method: 'GET', endpoint: '/api/instances', description: 'EC2 인스턴스 목록 조회' },
        { method: 'POST', endpoint: '/api/deploy', description: '새 배포 시작' },
        { method: 'GET', endpoint: '/api/metrics', description: '인프라 메트릭 조회' },
      ],
    },
    {
      id: '3',
      title: 'Real-time Analytics Dashboard',
      description: '실시간 데이터 처리 및 분석 시스템',
      longDescription: '대용량 데이터를 실시간으로 처리하고 분석하는 시스템입니다. Apache Kafka를 사용한 스트림 처리, ClickHouse를 통한 고속 분석 쿼리, WebSocket을 통한 실시간 대시보드 업데이트를 지원합니다.',
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHJvb218ZW58MXx8fHwxNzU5MjEyNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Node.js', 'Kafka', 'ClickHouse', 'WebSocket', 'Docker'],
      githubUrl: 'https://github.com/username/analytics-dashboard',
      liveUrl: 'https://analytics-demo.com',
      apiEndpoints: [
        { method: 'GET', endpoint: '/api/analytics/realtime', description: '실시간 분석 데이터' },
        { method: 'POST', endpoint: '/api/events', description: '이벤트 데이터 전송' },
        { method: 'GET', endpoint: '/api/reports/{id}', description: '분석 리포트 조회' },
      ],
    },
  ];

  // 경험 정보
  const experiences: TimelineItem[] = [
    {
      id: '1',
      title: 'SSAFY (Samsung Software Academy For Youth)',
      company: '멀티캠퍼스',
      location: '광주광역시, 대한민국',
      period: '2025.02 - 현재',
      description: [
        '알고리즘 - 컴퓨팅 사고력, 기본/응용/심화 SW 문제해결',
        '코딩 - Front-End, Back-End, DB등 SW 필수 지식과 데일리 실습을 중심으로 한 강도 높은 코딩 학습',
        '팀 프로젝트',
        '스터디를 통한 CS, 알고리즘 학습',
      ],
      technologies: ['Python', 'Django', 'SQL', 'AWS', 'Docker', 'Vue.js'],
    },
    {
      id: '2',
      title: '풀스택 개발자',
      company: '(주) 휴먼인텍',
      location: '용인, 대한민국',
      period: '2024.04 - 2024.09',
      description: [
        'RESTful API 개발 및 데이터베이스 설계',
        'Native Memory Tracking (NMT) 기반의 JVM 외부 메모리 진단을 통해 서버의 불안정 Heap 설정 문제를 근본적으로 해결',
        '코드 리뷰 및 테스트 자동화 도입으로 코드 품질 향상',
      ],
      technologies: ['Java', 'MySQL', 'JSP', 'Mybaits', 'JPA'],
    },
    {
      id: '3',
      title: 'Kepco Digital bootcamp',
      company: '광주인력개발원',
      location: '광주광역시, 대한민국',
      period: '2023.08 - 2024.02',
      description: [
        'Python, Java 프로그래밍',
        '데이터 전처리 및 시각화',
        'ML/DL 이해 및 활용',
        '데이터베이스 실습과 통계분석',
      ],
      technologies: ['Java', 'Python', 'MySQL', 'ML/DL'],
    },
  ];

  // 기술 스택 정보
  const techStack = [
    { name: 'Java', icon: <Server className="w-5 h-5" /> },
    { name: 'Springboot', icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
    { name: 'NestJS', icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'Prisma', icon: <Database className="w-5 h-5" /> },
    { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
    { name: 'JPA', icon: <Database className="w-5 h-5" /> },
    { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Docker', icon: <Server className="w-5 h-5" /> },
    { name: 'Kubernetes', icon: <Server className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* 소개 */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-mono">안녕하세요, 저는 <b>신입 백엔드 개발자</b></p>
                  <div className="flex items-baseline gap-2">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                      송현광
                    </h1>
                    <p className="text-primary font-mono">입니다.</p>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    클린 코드 지향 / 시스템 원리 탐구 / 문제 해결 능력
                  </p>
                </div>

                <p className="text-lg text-muted-foreground max-w-lg">
                  탄탄한 기본기와 주도적인 학습 능력으로 성장을 추구합니다. 안정적인 API 설계 및 클라우드 환경 AWS, Docker, Kubernetes 이해를 바탕으로 팀에 기여할 준비가 되어 있습니다.                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group">
                    <Mail className="w-4 h-4 mr-2" />
                    연락하기
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    이력서 다운로드
                  </Button>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/songddung" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://flowcode.tistory.com/" target="_blank" rel="noopener noreferrer">
                      <img src={tistoryIcon} alt="Tistory" className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-90 h-90 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                  <ImageWithFallback
                    src={profileImage}
                    alt="프로필 사진"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">소개</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              5년 이상의 백엔드 개발 경험을 바탕으로 확장 가능하고 안정적인 시스템을 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    기술 스택
                  </CardTitle>
                  <CardDescription>
                    전문적으로 사용하는 기술들입니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech) => (
                      <TechBadge
                        key={tech.name}
                        tech={tech.name}
                        icon={tech.icon}
                        variant="outline"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>역량 요약</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">총 경력</span>
                    <span className="text-primary">5+ 년</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">완료 프로젝트</span>
                    <span className="text-primary">20+ 개</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">주요 언어</span>
                    <span className="text-primary">Java, TypeScript, JavaScript</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">클라우드 플랫폼</span>
                    <span className="text-primary">AWS</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>학력</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">컴퓨터공학과 학사</h4>
                    <p className="text-muted-foreground">한국대학교 (2015-2019)</p>
                    <p className="text-sm text-muted-foreground">
                      자료구조, 알고리즘, 데이터베이스, 소프트웨어 공학 전공
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">프로젝트</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              최신 기술을 활용한 백엔드 시스템 개발 프로젝트들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/songddung" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                더 많은 프로젝트 보기
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">경험</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              현재까지 저의 발자국입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Timeline items={experiences} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">연락처</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              새로운 기회나 프로젝트에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-6">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">이메일</h3>
                  <p className="text-muted-foreground mb-4">shk8476@gmail.com</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:shk8476@gmail.com">메일 보내기</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-6">
                  <img src={tistoryIcon} alt="Tistory" className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Tistory</h3>
                  <p className="text-muted-foreground mb-4">flowcode.tistory.com</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://flowcode.tistory.com" target="_blank" rel="noopener noreferrer">
                      연결하기
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg hover:shadow-primary/10 transition-shadow md:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <Github className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground mb-4">github.com/songddung</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/songddung" target="_blank" rel="noopener noreferrer">
                      코드 보기
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">포트폴리오 다운로드</h3>
                  <p className="text-muted-foreground mb-6">
                    더 자세한 정보가 담긴 PDF 포트폴리오를 다운로드하실 수 있습니다.
                  </p>
                  <Button asChild>
                    <a href={portfolioPdf} download="송현광_포트폴리오.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      포트폴리오 PDF 다운로드
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}