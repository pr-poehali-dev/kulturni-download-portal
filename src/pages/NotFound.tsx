import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-4xl font-bold mb-4 kulturni-gradient">404</h1>
      <h2 className="text-2xl font-medium mb-6">Страница не найдена</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link to="/">
        <Button className="bg-kulturni-accent hover:bg-blue-700">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;