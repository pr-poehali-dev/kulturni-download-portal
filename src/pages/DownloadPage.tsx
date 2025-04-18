import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Download, Shield, Clock, Zap } from "lucide-react";

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Имитация загрузки
    setTimeout(() => {
      setIsDownloading(false);
      
      // Путь к файлу для скачивания
      const fileUrl = "/cheat-file.zip"; // Замените на реальный путь к файлу
      
      // Создание элемента для скачивания
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Kulturni_cheat.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 kulturni-gradient">
        Скачать Kulturni.cc
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="bg-kulturni-muted border-kulturni-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              Безопасность
            </CardTitle>
            <CardDescription>
              Наше ПО разработано с учетом всех современных систем анти-чит
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">
              Мы постоянно обновляем наше ПО, чтобы обеспечить максимальную безопасность использования. 
              При правильном использовании риск получения бана минимален.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-kulturni-muted border-kulturni-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              Производительность
            </CardTitle>
            <CardDescription>
              Оптимизировано для максимальной производительности
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">
              Наши читы работают с минимальным воздействием на FPS, сохраняя плавность игрового процесса
              даже на средних конфигурациях ПК.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8 bg-kulturni-muted border-kulturni-border">
        <CardHeader>
          <CardTitle>Последняя версия: v1.2.5</CardTitle>
          <CardDescription>Обновлено: <Clock className="inline h-4 w-4 mb-1" /> 15.09.2023</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-medium mb-2">Что нового:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-300">
            <li>Улучшена система анти-детекта</li>
            <li>Добавлены новые функции для улучшенного наведения</li>
            <li>Исправлены мелкие баги и повышена стабильность</li>
          </ul>
          <h3 className="text-lg font-medium mb-2">Системные требования:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Windows 10/11 (64-bit)</li>
            <li>Процессор: Intel Core i3 или AMD Ryzen 3</li>
            <li>RAM: 8 GB</li>
            <li>DirectX версии 11</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-kulturni-accent hover:bg-blue-700 w-full sm:w-auto"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Загрузка...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Скачать бесплатно
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
      
      <div className="bg-kulturni-muted p-6 rounded-lg border border-kulturni-border">
        <h2 className="text-xl font-bold mb-4">Инструкция по установке:</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-300">
          <li>Скачайте файл и распакуйте архив</li>
          <li>Отключите антивирус (из-за особенностей работы программы)</li>
          <li>Запустите файл "Kulturni.exe" от имени администратора</li>
          <li>Следуйте инструкциям в программе установки</li>
          <li>После установки запустите Counter Strike 2</li>
          <li>Используйте клавишу "Insert" для открытия меню чита в игре</li>
        </ol>
      </div>
    </div>
  );
};

export default DownloadPage;