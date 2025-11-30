import { Github, Mail } from 'lucide-react';
import tistoryIcon from '../assets/tistory.png';
import { Button } from './ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/songddung',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'Tistory',
      href: 'https://songddung.tistory.com',
      icon: <img src={tistoryIcon} alt="Tistory" className="w-5 h-5" />,
    },
    {
      name: 'Email',
      href: 'mailto:shk8476@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },

  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-mono text-primary"></span>
              <span className="ml-3 text-lg font-semibold">백엔드 개발자</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              새로운 문제에 주저하지 않고 도전하며,
              <br /> 탄탄한 기본기로 합리적인 해결책을 제시하겠습니다.
              <br /> 감사합니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">연결하기</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <a
                    href={link.href}
                    target={link.name === 'Email' ? undefined : '_blank'}
                    rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 송현광. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            Made with  using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;