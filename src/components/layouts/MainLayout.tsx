import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import { cn } from "@/lib/utils";

const MainLayout = () => {
  return (
    <div className={cn("min-h-screen bg-kulturni text-kulturni-foreground")}>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
      <footer className="py-4 border-t border-kulturni-border mt-8">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kulturni.cc. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;