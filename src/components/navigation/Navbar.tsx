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
        isActive ? "bg-kulturni-muted text-white" : "text-gray-300"
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
    <header className="border-b border-kulturni-border sticky top-0 z-50 bg-kulturni">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold kulturni-gradient">
          Kulturni.cc
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
              <span>Профиль</span>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatarUrl} alt={user?.name || "User"} />
                <AvatarFallback>
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-kulturni-muted py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/download" className="text-white hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Скачать
            </Link>
            <Link to="/contacts" className="text-white hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Контакты
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-white hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              <span>Профиль</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src={user?.avatarUrl} alt={user?.name || "User"} />
                <AvatarFallback>
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