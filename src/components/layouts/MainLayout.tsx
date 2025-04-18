import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import { cn } from "@/lib/utils";

const MainLayout = () => {
  return (
    <div className={cn("min-h-screen bg-kulturni-dark text-kulturni-foreground")}>
      <div className="fixed inset-0 z-0 bg-[url('https://cdn.poehali.dev/files/a1ba8fb0-4dce-4b8f-b7d5-5295715c3820.png')] bg-center bg-no-repeat opacity-5"></div>
      
      <div className="relative z-10">
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
    </div>
  );
};

export default MainLayout;