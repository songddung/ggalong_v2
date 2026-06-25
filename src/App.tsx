import React from 'react';
import { Download, Github, Mail, Code, Database, Server, Cloud, ExternalLink } from 'lucide-react';
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
import { ImageModal } from './components/ImageModal';
import tistoryIcon from './assets/tistory.png';
import profileImage from './assets/hyunkwang.jpg';
import portfolioPdf from './assets/portfolio.pdf';
import p4Image from './assets/common-project.png';
import p3Image from './assets/specialized-project.png';
import p2Image from './assets/autonomous-project.png';
import p1Image from './assets/db.png';
import ProjectDetailPage from './ProjectDetailPage';

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false);

  const projects: Project[] = [
    {
      id: '1', 
      title: '대규모 클라우드 전환: \n DB 마이그레이션 및 정합성 검증(진행중)',
      description: '우정정보관리원의 대규모 클라우드 마이그레이션 프로젝트에서 총 19개 데이터베이스(Oracle, MSSQL)의 이관 및 데이터 무결성 검증을 수행한 실무 프로젝트입니다.(진행중)',
      longDescription: `1개 핵심 데이터베이스의 Import 작업을 직접 전담하고, 대전 국가정보자원관리원에서 이관하는 나머지 18개 DB의 정합성을 검증. 
      할당된 스토리지 부족 문제를 해결하기 위해 사전 DB 슬림화 작업을 위한 준비, 
      RAC 환경 전환에 따라 Sequence 성능 최적화 및 경합 방지를 위해 Cache size 재설계,
      Linux 환경에서 awk 스크립트와 sqlplus를 활용해 대용량 로그 파싱 및 오브젝트 검증을 자동화하여 시스템 무결성을 확보해 나가고 있습니다.
      `,
      image: p1Image, 
      duration: '2026년 01월 - 2026년 08월(예정)',
      technologies: ['Oracle', 'MSSQL', 'Linux', 'Shell Script (awk)', 'sqlplus'],
      githubUrl: '', 
      liveUrl: '',
      troubleshooting: [
        {
          problem: '할당된 클라우드 DB 인스턴스의 스토리지 공간 부족 현상 발생',
          solution: '데이터베이스 자원 사용량을 선제적으로 분석하여 사전 슬림화(용량 최적화) 작업 및 불필요한 데이터 정리 준비',
          result: '이관에 필요한 여유 공간을 확보하여 한정된 리소스내 작업 진행'
        },
        {
          problem: '서비스 무중단을 위해 CDC 솔루션을 사용하여 데이터는 타겟 테이블에 정상 적재되어 MAX ID가 상승하지만, DB 내부의 sequence 객체는 과거 값으로 머물러 데이터 무결성 제약조건 위반 발생 위험',
          solution: 'ORACLE 19c 버전에서 사용할 수 있는 RESTART 명령으로 sequence 동기화 프로세스 적용',
          result: 'sequence gap으로 인한 무결성 제약조건 위반 장애를 선제적으로 차단'
        },
        {
          problem: '18개 DB에서 발생하는 방대한 이관 로그를 수동으로 검증하기에는 시간과 정확도에 한계 존재',
          solution: 'Linux 환경에서 awk 명령어를 활용하여 방대한 로그 파일 내 실제 테이블 크기와 레코드 수만 추출하는 쉘 스크립트 작성 및 적용',
          result: '휴먼 에러 방지 및 빠르고 정확한 데이터 정합성 검증(테이블 사이즈, 레코드 수)'
        },
        {
          problem: '데이터 외에 인덱스, 트리거, 시퀀스 등 DB 오브젝트의 누락 없는 완벽한 이관 확인 필요',
          solution: 'GUI 툴에 의존하지 않고 sqlplus 환경에서 직접 검증 쿼리를 작성 및 실행하여 양측 DB의 오브젝트 수 정밀 대조',
          result: '진행중'
        },
      ],
      // retrospect: [
      //   `실제 운영 환경에서 19개나 되는 대규모 데이터베이스를 다루며, 단 하나의 레코드 유실도 허용하지 않는 '데이터 무결성'의 무게감을 체감했습니다.\n`,
      //   `특히 GUI가 아닌 CLI(Linux, sqlplus) 환경에서 쉘 스크립트(awk)를 활용해 대용량 로그를 파싱하고 문제를 해결하면서 실무형 엔지니어링 감각을 크게 키울 수 있었습니다.\n`,
      //   `단순한 데이터 이동을 넘어, 한정된 디스크 공간 제약을 해결하기 위해 슬림화 작업을 기획하는 과정은 DBA 및 시스템 운영자로서 필수적인 자원 관리 역량의 중요성을 깊이 깨닫는 계기가 되었습니다.`
      // ].join(' '),
      retrospect: [
        `국가 공공기관의 핵심 데이터베이스 19개를 다루며, 데이터 무결성과 서비스 무중단이 지니는 절대적인 무게감을 깊이 체감했습니다.\n`,
        `눈으로 확인하는 수동 검증의 한계를 깨닫고, Linux 기반의 쉘 스크립트와 딕셔너리 뷰를 활용한 교차 검증 파이프라인을 직접 구축하여 빠르고 오차 없는 시스템 엔지니어링 감각을 키웠습니다.\n`,
        `한정된 디스크 공간에서의 슬림화 전략부터 Lock 경합을 고려한 시퀀스 재설계까지, 겉으로 드러나지 않는 시스템의 병목을 찾아내고 최적화하는 과정을 통해 튼튼한 인프라와 백엔드의 유기적인 연결성을 완벽히 이해하게 되었습니다.`
      ].join(' '),
    },
    {
      id: '2',
      title: `PAI(Parent & I): \n 아이 질문 기반 지능형 추천 시스템`,
      description: `아이의 질문 데이터를 분석해 관심사를 추출하고 맞춤형 콘텐츠를 추천하는 AI 기반 인터랙션 시스템입니다. \n User, Media, Insight 서비스 개발을 주도하며 시스템의 핵심 기능을 구축했습니다.`,
      longDescription: 'JWT 인증, S3를 활용한 미디어 처리, 관심도 계산 알고리즘 및 외부 API 연동을 포함한 3개의 핵심 서비스를 담당했습니다. 특히 Redis 기반 토큰 버전 관리로 JWT의 보안 취약점을 해결하고, Promise.all 병렬 처리로 이미지 로딩 시간을 75% 단축하는 등 성능과 안정성을 동시에 개선한 경험이 있습니다.',
      image: p2Image,
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
  id: '3',
  title: 'PAI : \nRefactor (MSA/DDD)',
  description: `기존 PAI 프로젝트의 확장성과 유지보수성을 확보하기 위해 Hexagonal Architecture와 DDD를 적용하고, AWS EKS 기반으로 인프라를 고도화한 리팩토링 프로젝트입니다.`,
  longDescription: '단일 서버를 7개의 독립적인 마이크로 서비스로 분리하고, Entity와 Value Object 패턴으로 도메인 로직을 명확화했습니다. 나아가 AWS EKS(Managed Kubernetes)를 도입하여 고가용성(HA)을 확보하고, 오토스케일링을 통해 유연한 트래픽 대응 환경을 구축했습니다.',
  image: p3Image,
  duration: '2025년 10월 - 2025년 12월',
  technologies: ['Node.js', 'AWS EKS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Prisma', 'Redis'],
  githubUrl: 'https://github.com/songddung',

  troubleshooting: [
    {
      problem: '단일 서버 구조의 한계와 낮은 유지보수성, 테스트의 어려움',
      solution: 'Hexagonal Architecture와 DDD를 적용하여 Clean Architecture 구조로 재구성하고, 단일 서버를 7개의 마이크로 서비스로 분리',
      result: '비즈니스 로직과 인프라 계층 분리로 테스트 용이성 및 코드 품질 개선, 유지보수성 향상'
    },
    {
      problem: '자체 구축(Self-hosted) 쿠버네티스 운영의 복잡성 및 마스터 노드 관리 부담',
      solution: 'AWS EKS(Elastic Kubernetes Service)로 마이그레이션하여 컨트롤 플레인 관리를 위임',
      result: '인프라 관리 리소스를 40% 절감하고, 안정적인 클러스터 운영 및 노드 오토스케일링 환경 확보'
    },
    {
      problem: '백엔드와 프론트엔드 간 타입 불일치 및 일관성 문제',
      solution: 'Shared-types Package를 NPM 패키지로 배포하여 타입 공유',
      result: '프론트엔드와 백엔드 간 타입 일관성 보장, 코드 재사용성 62% 증가'
    },
  ],
  retrospect: `시스템이 성장함에 따라 아키텍처의 중요성을 절실히 깨달았습니다. DDD를 통해 복잡한 비즈니스 로직을 구조화하고, AWS EKS를 도입하며 클라우드 네이티브 환경에서의 인프라 운영 노하우를 쌓았습니다. 단순히 기능을 구현하는 것을 넘어, 서비스의 안정성과 확장성을 모두 고려하는 엔지니어링 관점을 갖게 되었습니다.`,
},
    {
      id: '4',
      title: 'CHAMBER: \n실시간 구역별 스마트 공조 관리 시스템',
      description: '실시간 IoT 센서 데이터를 시각화하고 제어하는 스마트 공조 관리 시스템의 프론트엔드 전체를 담당했습니다. React 기반의 웹 대시보드와 Flutter 기반의 모바일 앱을 개발했습니다.',
      longDescription: 'WebSocket을 이용해 100ms 이내의 실시간 데이터 동기화를 구현했으며, 특히 Flutter 앱에서는 색맹 모드 4종을 포함한 전역 접근성 시스템을 설계하여 모든 UI에 적용했습니다. React 웹에서는 사용자 입력과 실시간 데이터 간의 충돌을 해결하여 입력 보존율 100%를 달성했습니다.',
      image: p4Image,
      duration: '2025년 7월 - 2025년 8월 (7주)',
      technologies: ['React', 'Flutter', 'TypeScript', 'Websocket', 'Zustand', 'Tanstack Query'],
      githubUrl: 'https://github.com/songddung/chamber',

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
    },
  ];

  // 경험 정보
  const experiences: TimelineItem[] = [
    {
      id: '1',
      title: '데이터 이관 및 정합성 검증(진행중)',
      company: '우정정보관리원',
      location: '나주, 대한민국',
      period: '2026.01 - 현재', 
      description: [
        '대규모 클라우드 마이그레이션 프로젝트 내 총 19개 DB 대상 데이터 이관 정합성 검증 수행',
        '할당된 데이터베이스 공간 부족 문제를 해결하기 위한 DB 슬림화 작업 및 사전 준비',
        '1개 핵심 대상 데이터베이스의 실제 데이터 Import 마이그레이션 작업 전담 수행',
        'Linux 환경에서 awk 명령어를 활용하여 대용량 이관 로그 내 필요한 텍스트 데이터를 추출, 테이블 및 레코드 수 검증 프로세스 효율화',
        'sqlplus를 활용한 검증 쿼리 작성 및 실행을 통해 데이터베이스 오브젝트 수 정밀 검증',
        'MSSQL 이관 대상 DB의 오브젝트, 테이블, 레코드 수 정합성 검증을 지원하며 이기종 DBMS 경험 확보',
      ],
      technologies: ['Oracle', 'MSSQL', 'Linux', 'Shell Script', 'sqlplus'],
    },
    {
      id: '2',
      title: 'SSAFY (Samsung Software Academy For Youth)',
      company: '멀티캠퍼스',
      location: '광주광역시, 대한민국',
      period: '2025.02 - 2025.12',
      description: [
        '알고리즘 - 컴퓨팅 사고력, 기본/응용/심화 SW 문제해결',
        '코딩 - Front-End, Back-End, DB등 SW 필수 지식과 데일리 실습을 중심으로 한 강도 높은 코딩 학습',
        '팀 프로젝트',
        '스터디를 통한 CS, 알고리즘 학습',
      ],
      technologies: ['Python', 'Django', 'SQL', 'AWS', 'Docker', 'Vue.js'],
    },
    {
      id: '3',
      title: '풀스택 개발자',
      company: '(주) 휴먼인텍',
      location: '용인, 대한민국',
      period: '2024.04 - 2024.09',
      description: [
        'RESTful API 개발 및 데이터베이스 설계',
        'Native Memory Tracking (NMT) 기반의 JVM 외부 메모리 진단을 통해 서버의 불안정 Heap 설정 문제를 근본적으로 해결',
        '코드 리뷰 및 테스트 자동화 도입으로 코드 품질 향상',
      ],
      technologies: ['Java', 'MySQL', 'JSP', 'Mybatis', 'JPA'],
    },
    {
      id: '4',
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
    { name: 'ORACLE', icon: <Database className="w-5 h-5" /> },
    { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Docker', icon: <Server className="w-5 h-5" /> },
    { name: 'Java', icon: <Server className="w-5 h-5" /> },
    { name: 'Springboot', icon: <Code className="w-5 h-5" /> },   
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
    { name: 'JPA', icon: <Database className="w-5 h-5" /> },
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
                          <p className="text-primary font-mono">안녕하세요, </p>
                          <div className="flex items-baseline gap-2">
                            <h1 className="text-4xl lg:text-6xl font-bold">
                              송현광
                            </h1>
                            <p className="text-primary font-mono">입니다.</p>
                          </div>
                          <p className="text-xl text-muted-foreground">
                            데이터 무결성 / 시스템 안정성 / 인프라 최적화
                          </p>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-lg">
                          복잡한 데이터의 흐름과 시스템의 근본적인 원리를 파고들어, <br />
                          단 1%의 오차도 없는 안정적인 운영 인프라를 구축하는 것을 목표로 합니다.
                        </p>

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
                        <div
                          className="w-90 h-90 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 cursor-pointer"
                          onClick={() => setIsProfileModalOpen(true)}
                        >
                          <ImageWithFallback
                            src={profileImage}
                            alt="프로필 사진"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                      단 하나의 데이터 오차도 허용하지 않는 꼼꼼함으로, <br />
                      시스템의 무결성과 안정성을 책임지는 데이터베이스 관리자입니다.
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
                            실무 운영과 아키텍처 고도화를 위해 다져온 기술들입니다.
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
                            <span className="font-medium">포지션</span>
                            <span className="text-primary">DBA / DBMS 운영</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="font-medium">핵심 경험</span>
                            <span className="text-primary">대규모 DB 마이그레이션 및 정합성 검증</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="font-medium">주요 기술</span>
                            <span className="text-primary">Oracle, PostgreSQL, MSSQL</span>
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

                  {/*<div className="text-center mt-12">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://github.com/songddung" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        더 많은 프로젝트 보기
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div> */}
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

        <ImageModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          imageSrc={profileImage}
          imageAlt="송현광 프로필 사진"
        />
      </div>
    </Router>
  );
}