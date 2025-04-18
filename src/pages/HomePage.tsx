import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 kulturni-gradient">
        Kulturni.cc
      </h1>

      <div className="mb-10 w-full max-w-md mx-auto">
        <img 
          src="/placeholder.svg" 
          alt="Kulturni.cc Logo" 
          className="w-full h-auto rounded-lg shadow-lg mb-8" 
        />
      </div>

      <div className="prose prose-invert max-w-3xl text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Доминируй в CS2 с нашим программным обеспечением
        </h2>
        
        <p className="text-lg mb-4">
          <strong>Kulturni.cc</strong> - это уникальный чит на Counter Strike 2, созданный командой 
          Kulturni House. Данное ПО разработано для доминации в играх, давая вам 
          преимущество над другими игроками.
        </p>
        
        <p className="text-lg mb-6">
          Важно играть с умом, чтобы не получить игровую блокировку. 
          Наше ПО создано таким образом, чтобы минимизировать риски бана при 
          правильном использовании.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/download">
          <Button size="lg" className="bg-kulturni-accent hover:bg-blue-700 text-white">
            Скачать бесплатно
          </Button>
        </Link>
        <Link to="/contacts">
          <Button variant="outline" size="lg" className="border-kulturni-border text-kulturni-foreground hover:bg-kulturni-muted">
            Связаться с нами
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;