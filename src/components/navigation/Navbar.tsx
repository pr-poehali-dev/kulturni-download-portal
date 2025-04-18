import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/components/auth/AuthProvider";
import { Menu, X } from "lucide-react";

const NavItem = ({ href, children, currentPath }: { href: string; children: React.ReactNode; currentPath: string }) => {
  const isActive = currentPath === href;
  
  return (
    <Link 
      to={href} 
      className={cn(
        "px-4 py-2 rounded-md transition-colors hover:bg-kulturni-muted", 
        isActive ? "bg-kulturni-muted text-kulturni-accent" : "text-kulturni-foreground"
      )}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <header className="border-b border-kulturni-border sticky top-0 z-50 bg-kulturni-dark backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-0 h-0 border-l-[9px] border-r-[9px] border-b-[16px] border-transparent border-b-kulturni-accent"
                style={{ filter: 'drop-shadow(0 0 4px #6eaed7)' }}
              ></div>
            </div>
          </div>
          <span className="text-xl font-medium kulturni-text">Kulturni.cc</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavItem href="/" currentPath={location.pathname}>Главная</NavItem>
          <NavItem href="/download" currentPath={location.pathname}>Скачать</NavItem>
          <NavItem href="/contacts" currentPath={location.pathname}>Контакты</NavItem>
        </nav>

        {/* Profile button (desktop) */}
        <div className="hidden md:block">
          <Link to="/profile">
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-kulturni-muted">
              <span className="text-kulturni-foreground">Профиль</span>
              <Avatar className="h-8 w-8 kulturni-glow">
                <AvatarImage src={user?.avatarUrl} alt={user?.name || "User"} />
                <AvatarFallback className="bg-kulturni-muted text-kulturni-accent">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-kulturni-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-kulturni-muted py-4 px-6 border-b border-kulturni-border">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-kulturni-foreground hover:text-kulturni-accent" onClick={() => setMobileMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/download" className="text-kulturni-foreground hover:text-kulturni-accent" onClick={() => setMobileMenuOpen(false)}>
              Скачать
            </Link>
            <Link to="/contacts" className="text-kulturni-foreground hover:text-kulturni-accent" onClick={() => setMobileMenuOpen(false)}>
              Контакты
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-kulturni-foreground hover:text-kulturni-accent" onClick={() => setMobileMenuOpen(false)}>
              <span>Профиль</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src={user?.avatarUrl} alt={user?.name || "User"} />
                <AvatarFallback className="bg-kulturni-muted text-kulturni-accent">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;