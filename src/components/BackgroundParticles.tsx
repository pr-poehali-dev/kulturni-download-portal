import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Устанавливаем размер холста на весь экран
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // При изменении размера создаем частицы заново
      initParticles();
    };
    
    // Инициализация частиц
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 12000), 120); // Адаптивное количество частиц
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Размер от 0.5 до 2.5 пикселей
          speedX: (Math.random() - 0.5) * 0.5, // Скорость по X от -0.25 до 0.25
          speedY: (Math.random() - 0.5) * 0.3, // Скорость по Y от -0.15 до 0.15
          opacity: Math.random() * 0.4 + 0.1 // Прозрачность от 0.1 до 0.5
        });
      }
    };
    
    // Анимация частиц
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Отрисовка частицы
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 180, 190, ${particle.opacity})`;
        ctx.fill();
        
        // Обновление позиции
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Проверка границ и возврат на противоположную сторону
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Соединение частиц линиями, если они близко
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) { // Если расстояние меньше 100 пикселей
              // Рисуем линию с прозрачностью, зависящей от расстояния
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const lineOpacity = 0.1 * (1 - distance / 100); // Чем ближе, тем более видимая линия
              ctx.strokeStyle = `rgba(160, 160, 170, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Установка слушателей событий и запуск анимации
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();
    
    // Очистка при размонтировании
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default BackgroundParticles;