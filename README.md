# 송현광 | 백엔드 개발자 포트폴리오

안녕하세요! 백엔드 개발자 송현광의 개인 포트폴리오 웹사이트입니다.
이 프로젝트는 저의 개발 경험, 기술 스택, 그리고 진행했던 프로젝트들을 소개하기 위해 제작되었습니다.

React와 TypeScript를 기반으로 구축되었으며, Docker와 Traefik을 통해 HTTPS를 적용하여 안정적으로 배포되었습니다.

**🔗 Live Demo: https://ggalong.me**

---

## ✨ 주요 기능

- **프로젝트 소개**: 각 프로젝트의 목표, 사용 기술, 문제 해결 경험 및 회고를 상세히 기록
- **경력 및 경험**: SSAFY, (주)휴먼인텍 등에서의 경험을 시간순으로 정리
- **기술 스택**: 사용 가능한 기술들을 아이콘과 함께 시각적으로 표현
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 등 다양한 디바이스에서 최적화된 UI 제공
- **PDF 포트폴리오 다운로드**: 웹사이트 내용을 정리한 PDF 파일을 다운로드 기능
- **HTTPS 자동 적용**: Traefik과 Let's Encrypt를 연동하여 SSL 인증서 자동 발급 및 갱신

## 🛠️ 기술 스택

| 구분         | 기술                                                                                   |
| :----------- | :------------------------------------------------------------------------------------- |
| **Frontend** | `React`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`, `lucide-react`, `react-router-dom` |
| **Infra**    | `Docker`, `Docker Compose`, `Traefik`                                                  |

## 🚀 시작하기

- Node.js (v18 이상 권장)
- Docker
- Docker Compose

## 🚢 배포하기

본 프로젝트는 Traefik을 리버스 프록시로 사용하여 Docker 컨테이너를 배포합니다. `docker-compose.yml` 파일이 이미 설정되어 있습니다

1.  **(선택) `docker-compose.yml` 수정**:

    - 자신의 도메인과 이메일로 변경이 필요한 경우, `web` 서비스의 `labels`와 `traefik` 서비스의 `command` 부분을 수정

2.  **Docker Compose 실행**:
    ```bash
    docker-compose up -d --build
    ```
    위 명령어를 실행하면 Traefik이 `ggalong.me` 도메인으로 들어오는 요청을 받아 자동으로 HTTPS 인증서를 발급하고, `web` 서비스로 트래픽을 전달합니다.
