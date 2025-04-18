import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactsPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 kulturni-gradient">
        Свяжитесь с нами
      </h1>
      
      <p className="text-center text-gray-300 mb-10">
        Есть вопросы или нужна помощь? Мы всегда на связи!
      </p>
      
      <div className="grid gap-6">
        <ContactCard 
          title="Telegram канал"
          description="Следите за новостями и обновлениями"
          icon="📢"
          link="https://t.me/kulturnihouse"
          linkText="@kulturnihouse"
        />
        
        <ContactCard 
          title="Личные сообщения"
          description="Задайте вопрос напрямую разработчику"
          icon="💬"
          link="https://t.me/kulturni1337"
          linkText="@kulturni1337"
          isPrimaryContact
        />
        
        <ContactCard 
          title="Поддержка проекта"
          description="Помогите проекту развиваться дальше"
          icon="💎"
          link="https://www.donationalerts.com/r/kulturni1337"
          linkText="DonationAlerts"
        />
      </div>
      
      <div className="mt-12 bg-kulturni-muted p-6 rounded-lg border border-kulturni-border">
        <h2 className="text-xl font-bold mb-4">Часто задаваемые вопросы</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Безопасно ли использовать ваш чит?</h3>
            <p className="text-sm text-gray-300">
              При правильном использовании наше ПО минимизирует риски обнаружения. Однако, мы рекомендуем следовать инструкциям и не злоупотреблять функциями чита.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Как часто выходят обновления?</h3>
            <p className="text-sm text-gray-300">
              Мы выпускаем обновления примерно раз в 2-3 недели, а также экстренные патчи при необходимости.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Почему антивирус блокирует ваш файл?</h3>
            <p className="text-sm text-gray-300">
              Из-за особенностей работы нашего ПО антивирусы могут ложно определять его как вредоносное ПО. Это стандартная ситуация для программ, которые взаимодействуют с игровыми процессами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  linkText: string;
  isPrimaryContact?: boolean;
}

const ContactCard = ({
  title,
  description,
  icon,
  link,
  linkText,
  isPrimaryContact = false
}: ContactCardProps) => {
  return (
    <Card className={`border-kulturni-border ${isPrimaryContact ? 'bg-kulturni-accent bg-opacity-20' : 'bg-kulturni-muted'}`}>
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="text-3xl mr-4 mt-1">{icon}</div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            <Button 
              variant={isPrimaryContact ? "default" : "outline"} 
              className={isPrimaryContact ? "bg-kulturni-accent hover:bg-blue-700" : "border-kulturni-border"}
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                {linkText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactsPage;