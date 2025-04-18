import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BackgroundParticles from "@/components/BackgroundParticles";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center relative z-10">
      <BackgroundParticles />
      
      <div className="mb-12 w-full flex justify-center">
        <div className="w-full max-w-md mx-auto flex justify-center">
          <img 
            src="https://cdn.poehali.dev/files/a1ba8fb0-4dce-4b8f-b7d5-5295715c3820.png" 
            alt="Kulturni.cc Logo" 
            className="w-56 h-56 object-contain animate-pulse-glow"
          />
        </div>
      </div>

      <div className="prose prose-invert max-w-3xl text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 kulturni-text">
          Доминируй в CS2 с нашим программным обеспечением
        </h2>
        
        <p className="text-lg mb-4 text-kulturni-foreground">
          <strong>Kulturni.cc</strong> - это уникальный чит на Counter Strike 2, созданный командой 
          Kulturni House. Данное ПО разработано для доминации в играх, давая вам 
          преимущество над другими игроками.
        </p>
        
        <p className="text-lg mb-6 text-kulturni-foreground">
          Важно играть с умом, чтобы не получить игровую блокировку. 
          Наше ПО создано таким образом, чтобы минимизировать риски бана при 
          правильном использовании.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/download">
          <Button size="lg" className="kulturni-button">
            Скачать бесплатно
          </Button>
        </Link>
        <Link to="/contacts">
          <Button variant="outline" size="lg" className="border-kulturni-border text-kulturni-foreground hover:bg-kulturni-muted hover:text-kulturni-accent">
            Связаться с нами
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;