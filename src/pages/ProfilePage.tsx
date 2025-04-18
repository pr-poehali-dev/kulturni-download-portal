import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, LogOut, User, Settings, Lock } from "lucide-react";

const ProfilePage = () => {
  const { user, isAuthenticated, login, register, logout, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState(isAuthenticated ? "profile" : "login");
  
  // Состояние для форм
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });
  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    avatarUrl: user?.avatarUrl || "",
  });
  
  // Обработчики форм
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(loginForm.email, loginForm.password);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    register(registerForm.name, registerForm.email, registerForm.password);
  };
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: profileForm.name,
      avatarUrl: profileForm.avatarUrl
    });
  };
  
  if (!isAuthenticated) {
    return (
      <Card className="max-w-md mx-auto bg-kulturni-muted border-kulturni-border">
        <CardHeader>
          <CardTitle className="kulturni-gradient">Аккаунт Kulturni.cc</CardTitle>
          <CardDescription>Войдите или зарегистрируйтесь для полного доступа</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-kulturni-accent hover:bg-blue-700">
                    Войти
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      type="text"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-kulturni-accent hover:bg-blue-700">
                    Зарегистрироваться
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 kulturni-gradient">
        Личный кабинет
      </h1>
      
      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
        <div>
          <Card className="bg-kulturni-muted border-kulturni-border mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatarUrl} />
                  <AvatarFallback className="text-xl">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Button variant="destructive" onClick={logout} className="w-full flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </CardFooter>
          </Card>
          
          <div className="bg-kulturni-muted p-4 rounded-lg border border-kulturni-border">
            <div className="flex items-start mb-4">
              <AlertCircle className="text-yellow-400 mr-2 h-5 w-5 mt-0.5" />
              <p className="text-sm text-gray-300">
                Для безопасности вашего аккаунта рекомендуем использовать сложный пароль и не передавать данные для входа третьим лицам.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Профиль
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Настройки
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card className="bg-kulturni-muted border-kulturni-border">
                <CardHeader>
                  <CardTitle>Ваш профиль</CardTitle>
                  <CardDescription>
                    Настройте отображение своего профиля
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile}>
                    <div className="grid gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Отображаемое имя</Label>
                        <Input
                          id="name"
                          type="text"
                          value={profileForm.name}
                          onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                          placeholder="Ваше имя"
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="avatar">URL аватарки</Label>
                        <Input
                          id="avatar"
                          type="text"
                          value={profileForm.avatarUrl}
                          onChange={(e) => setProfileForm({...profileForm, avatarUrl: e.target.value})}
                          placeholder="https://example.com/avatar.jpg"
                        />
                        <p className="text-xs text-gray-400">
                          Введите URL изображения для вашей аватарки
                        </p>
                      </div>
                      
                      <Button type="submit" className="bg-kulturni-accent hover:bg-blue-700">
                        Сохранить изменения
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="bg-kulturni-muted border-kulturni-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    Безопасность
                  </CardTitle>
                  <CardDescription>
                    Управляйте настройками безопасности аккаунта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Текущий пароль</Label>
                      <Input
                        id="current-password"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">Новый пароль</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Подтвердите новый пароль</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <Button className="bg-kulturni-accent hover:bg-blue-700">
                      Сменить пароль
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;