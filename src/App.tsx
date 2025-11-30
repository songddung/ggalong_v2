import { Download, Github, Mail, Code, Database, Server, Cloud, ArrowRight, ExternalLink } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ProjectDetailPage from './ProjectDetailPage';

export default function App() {

  const projects: Project[] = [
    {
      id: '1',
      title: `PAI(Parent & I): \n 아이 질문 기반 지능형 추천 시스템`,
      description: `아이의 질문 데이터를 분석해 관심사를 추출하고 맞춤형 콘텐츠를 추천하는 AI 기반 인터랙션 시스템입니다. \n User, Media, Insight 서비스 개발을 주도하며 시스템의 핵심 기능을 구축했습니다.`,
      longDescription: 'JWT 인증, S3를 활용한 미디어 처리, 관심도 계산 알고리즘 및 외부 API 연동을 포함한 3개의 핵심 서비스를 담당했습니다. 특히 Redis 기반 토큰 버전 관리로 JWT의 보안 취약점을 해결하고, Promise.all 병렬 처리로 이미지 로딩 시간을 75% 단축하는 등 성능과 안정성을 동시에 개선한 경험이 있습니다.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcGklMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5MjEyNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '2025년 8월 - 2025년 9월 (5주)',
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'React Native'],
      githubUrl: 'https://github.com/YJ856/PAI_before',
      liveUrl: 'https://api.ecommerce-demo.com',
      troubleshooting: [
        {
          problem: '로그아웃 및 프로필 전환 시 이전 토큰이 계속 유효함',
          solution: 'Redis 기반 Token Versioning 도입을 통한 토큰 무효화 로직 구현',
          result: '로그아웃 & 프로필 전환 시 토큰 즉시 무효화로 보안성 강화'
        },
        {
          problem: '오래된 관심사가 상위 순위에 남아 최신 관심사 반영 어려움',
          solution: '시간 감쇠 공식 적용 및 NestJS Schedule을 활용한 스케줄러를 도입하여 14일 이상 업데이트 안 된 데이터 주기적 삭제',
          result: '최신 관심사가 상위권에 정확히 반영되고 DB 용량 감소'
        },
        {
          problem: '프로필 이미지 로딩 지연으로 UI 깜빡임 현상 발생',
          solution: 'Promise.all을 사용하여 모든 이미지 URL을 병렬로 패칭',
          result: '로딩 시간 75% 단축 (1.2초 -> 0.3초) 및 UI 깜빡임 현상 해결'
        },
      ],
      retrospect: `User, Media, Insight 세 가지 핵심 서비스를 직접 개발하며 독립된 기능들이 어떻게 유기적으로 상호작용하는지 깊이 이해할 수 있었습니다. \n JWT의 Stateless 한계점을 극복하기 위해 Redis로 토큰 버전을 관리하는 로직을 직접 설계하며 인증 시스템의 보안을 한 단계 끌어올렸고, S3를 연동하며 대용량 파일 처리의 효율성을 고민했습니다.\n 특히 Insight 서비스에서 관심도 계산 로직을 만들고 외부 API와 연동하는 과정은 단순한 CRUD를 넘어, 데이터를 가공하여 새로운 가치를 만드는 백엔드 개발의 매력을 느끼게 해주었습니다.\n 이 프로젝트를 통해 각 서비스의 책임과 역할을 명확히 분리하고, 안정성과 성능을 모두 고려하는 시스템 설계 역량을 기를 수 있었습니다.`,
    },
    {
      id: '2',
      title: 'PAI : Refactor (MSA/DDD)',
      description: `기존 PAI 프로젝트의 확장성과 유지보수성을 확보하기 위해 Hexagonal Architecture와 DDD를 적용하여 Clean Architecture 구조로 재구성한 리팩토링 프로젝트입니다.`,
      longDescription: '단일 서버를 7개의 독립적인 마이크로 서비스로 분리하고, Entity와 Value Object 패턴으로 도메인 로직을 명확화했습니다. Kubernetes를 도입하여 독립 배포, 자동 스케일링 환경을 구축했습니다.',
      image: 'https://images.unsplash.com/photo-1735715606137-b1f47142f7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjbG91ZCUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzU5MTUzNDkyfDA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '2025년 10월 - 2025년 11월 (~ing)',
      technologies: ['Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Prisma', 'Redis'],
      githubUrl: 'https://github.com/username/cloud-manager',

      troubleshooting: [
        {
          problem: '단일 서버 구조의 한계와 낮은 유지보수성, 테스트의 어려움',
          solution: 'Hexagonal Architecture와 DDD를 적용하여 Clean Architecture 구조로 재구성하고, 단일 서버를 7개의 마이크로 서비스로 분리',
          result: '비즈니스 로직과 인프라 계층 분리로 테스트 용이성 및 코드 품질 개선, 유지보수성 향상'
        },
        {
          problem: '백엔드와 프론트엔드 간 타입 불일치 및 일관성 문제',
          solution: 'Shared-types Package를 NPM 패키지로 배포하여 타입 공유',
          result: '프론트엔드와 백엔드 간 타입 일관성 보장, 코드 재사용성 62% 증가'
        },
      ],
      retrospect: `시스템이 성장함에 따라 아키텍처의 중요성을 절실히 깨달았습니다. 단순히 기능을 구현하는 것을 넘어, 미래의 확장성과 안정성을 고려하여 아키텍처를 설계하는 과정을 경험하며 개발자로서의 시야를 넓힐 수 있었습니다. 마이크로 서비스 환경에서 타입 관리의 중요성을 이해하고, Kubernetes를 통한 배포 자동화 경험을 통해 시스템 전반에 대한 이해도를 높였습니다.`,
    },
    {
      id: '3',
      title: 'CHAMBER: 실시간 구역별 스마트 공조 관리 시스템',
      description: '실시간 IoT 센서 데이터를 시각화하고 제어하는 스마트 공조 관리 시스템의 프론트엔드 전체를 담당했습니다. React 기반의 웹 대시보드와 Flutter 기반의 모바일 앱을 개발했습니다.',
      longDescription: 'WebSocket을 이용해 100ms 이내의 실시간 데이터 동기화를 구현했으며, 특히 Flutter 앱에서는 색맹 모드 4종을 포함한 전역 접근성 시스템을 설계하여 모든 UI에 적용했습니다. React 웹에서는 사용자 입력과 실시간 데이터 간의 충돌을 해결하여 입력 보존율 100%를 달성했습니다.',
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHJvb218ZW58MXx8fHwxNzU5MjEyNDM5fDA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '2025년 7월 - 2025년 8월 (7주)',
      technologies: ['React', 'Flutter', 'TypeScript', 'Websocket', 'Zustand', 'Tanstack Query'],
      githubUrl: 'https://github.com/username/analytics-dashboard',
      liveUrl: 'https://analytics-demo.com',
      troubleshooting: [
        {
          problem: '관리자가 웹에서 온도를 조정하는 중 실시간 WebSocket 데이터가 수신되어 사용자 입력이 덮어씌워짐',
          solution: '사용자 입력 후 5초의 윈도우를 두어, 이 시간 동안 들어오는 WebSocket 데이터는 무시하고 사용자 입력을 보존하는 데이터 병합 로직 구현',
          result: '사용자 입력 손실 0건 달성 및 데이터 무결성 확보'
        },
        {
          problem: 'Flutter 앱에서 일부 UI 요소에만 색맹 모드가 적용되는 문제 발생',
          solution: 'HSV 색상 공간 변환 알고리즘과 Dart의 Extension 패턴을 결합하여, 앱의 모든 색상을 전역적으로 가로채 변환하는 시스템 설계',
          result: '모든 UI 요소에 색맹 지원 100% 적용 및 코드 재사용성 극대화'
        },
      ],
      retrospect: [
        `React(웹)와 Flutter(앱)라는 두 가지 다른 기술 스택으로 동일한 사용자 경험을 제공하는 과정에서 각 플랫폼의 장단점을 깊이 이해할 수 있었습니다.\n`,
        `특히 WebSocket을 통해 실시간으로 쏟아지는 데이터를 안정적으로 처리하고, 사용자 입력과 동기화하는 경험은 프론트엔드에서의 상태 관리의 중요성을 다시 한번 깨닫게 해주었습니다.\n`,
        '또한, 색맹 모드와 같은 접근성 기능을 직접 설계하고 구현하며 모든 사용자를 고려하는 개발의 사회적 책임과 가치를 배울 수 있었던 의미 있는 프로젝트였습니다.'
      ].join(' '),
      // ▲▲▲ 문제 해결 및 회고 추가 ▲▲▲
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
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
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
                          궁금증이 많아서 문제의 원인을 파고들고, 그 과정에서 더 나은 해결책을 찾는 걸 즐깁니다. <br />
                          "왜?"라는 질문이 결국 더 나은 시스템을 만든다고 믿습니다.
                        </p>
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
                      끊임없이 질문하고 학습하며, 최고의 동료가 될 준비를 마친 백엔드 개발자입니다.
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
                            집중적으로 학습하는 기술들입니다.
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
                            <span className="font-medium">스택</span>
                            <span className="text-primary">백엔드</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="font-medium">프로젝트 경험</span>
                            <span className="text-primary">3+</span>
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
                          <CardTitle>자격증</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {/* <h4 className="font-semibold">컴퓨터공학과 학사</h4> */}
                            <p className="text-muted-foreground">정보처리기사 </p>
                            <p className="text-sm text-muted-foreground">
                              SQLD
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
                      배움의 과정을 기록하고, 기술적 도전을 통해 성과와 성장을 증명한 개발 프로젝트들입니다.
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
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetailPage projects={projects} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}