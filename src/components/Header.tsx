import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: '홈', href: '#home' },
    { name: '소개', href: '#about' },
    { name: '프로젝트', href: '#projects' },
    { name: '경험', href: '#experience' },
    { name: '연락처', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/#home" smooth className="text-xl font-mono text-primary hover:text-primary/80 transition-colors">
              Song.dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button variant="ghost" key={item.name} asChild>
                <Link to={`/${item.href}`} smooth>
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-lg md:hidden">
            <nav className="flex flex-col items-center gap-4 py-8">
              {navItems.map((item) => (
                <Button variant="ghost" size="lg" key={item.name} asChild>
                  <Link to={`/${item.href}`} smooth onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;