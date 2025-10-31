import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#2C1810]">
      <nav className="fixed top-0 w-full z-50 bg-[#3D2817] border-b-4 border-[#57534E] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#22C55E] border-4 border-black"></div>
              <h1 className="text-xl text-[#22C55E]">MINE SERVER</h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'ГЛАВНАЯ', icon: 'Home' },
                { id: 'rules', label: 'ПРАВИЛА', icon: 'BookOpen' },
                { id: 'donate', label: 'ДОНАТ', icon: 'CreditCard' },
                { id: 'privileges', label: 'ПРИВИЛЕГИИ', icon: 'Crown' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm border-4 border-black transition-all hover:scale-105 ${
                    activeSection === item.id 
                      ? 'bg-[#22C55E] text-white' 
                      : 'bg-[#92400E] text-white hover:bg-[#A84C0F]'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="pt-32 pb-24 px-4 relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/3c21a124-3761-42cf-b90e-82eeeb9d1ab3/files/366bd6bf-249e-4400-a665-af8f89a3b838.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-5xl md:text-7xl text-[#22C55E] mb-6 drop-shadow-lg">
              МАЙНКРАФТ СЕРВЕР
            </h2>
            <p className="text-xl md:text-2xl text-[#D4D4D4] mb-8">
              Лучший сервер для выживания
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-[#3D2817] border-4 border-[#57534E] p-6 hover:scale-105 transition-transform">
              <p className="text-sm text-[#A8A29E] mb-2">IP СЕРВЕРА</p>
              <p className="text-2xl text-[#22C55E]">play.server.ru</p>
            </div>
            
            <div className="bg-[#3D2817] border-4 border-[#57534E] p-6 hover:scale-105 transition-transform">
              <p className="text-sm text-[#A8A29E] mb-2">ОНЛАЙН</p>
              <p className="text-2xl text-[#22C55E]">247 / 500</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'Sword', title: 'PVP', desc: 'Эпичные сражения' },
              { icon: 'Pickaxe', title: 'ВЫЖИВАНИЕ', desc: 'Классический режим' },
              { icon: 'Users', title: 'КОМЬЮНИТИ', desc: 'Дружное сообщество' }
            ].map((feature, idx) => (
              <Card key={idx} className="bg-[#3D2817] border-4 border-[#57534E] hover:border-[#22C55E] transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#22C55E] border-4 border-black flex items-center justify-center">
                      <Icon name={feature.icon as any} size={32} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-[#22C55E] text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-[#D4D4D4] text-center text-sm">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-24 px-4 bg-[#251810]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#22C55E] text-center mb-12 border-4 border-[#57534E] bg-[#3D2817] py-6">
            ПРАВИЛА СЕРВЕРА
          </h2>
          
          <div className="grid gap-6 max-w-3xl mx-auto">
            {[
              { num: '1', text: 'Запрещено использование читов и модификаций' },
              { num: '2', text: 'Уважайте других игроков' },
              { num: '3', text: 'Не используйте баги и дюпы' },
              { num: '4', text: 'Запрещён грифинг чужих построек' },
              { num: '5', text: 'Не спамьте в чате' },
              { num: '6', text: 'Слушайте администрацию сервера' }
            ].map((rule) => (
              <div 
                key={rule.num}
                className="flex items-center gap-4 bg-[#3D2817] border-4 border-[#57534E] p-6 hover:border-[#22C55E] transition-all"
              >
                <div className="w-12 h-12 bg-[#22C55E] border-4 border-black flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-white">{rule.num}</span>
                </div>
                <p className="text-[#D4D4D4] text-base">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#22C55E] text-center mb-12 border-4 border-[#57534E] bg-[#3D2817] py-6">
            ДОНАТ
          </h2>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-[#92400E] border-4 border-[#57534E] hover:border-[#22C55E] transition-all hover:scale-105">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-[#FACC15] border-4 border-black flex items-center justify-center">
                    <Icon name="Crown" size={40} className="text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-center text-[#FACC15]">VIP</CardTitle>
                <CardDescription className="text-center text-white text-xl mt-2">
                  299 ₽ / месяц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    'Префикс [VIP] в чате',
                    'Доступ к /fly',
                    'Цветной ник',
                    '2 региона',
                    'Приоритет входа',
                    'Доступ к /kit vip'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white text-sm">
                      <Icon name="Check" size={16} className="text-[#22C55E] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white border-4 border-black text-lg h-14">
                  КУПИТЬ VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="privileges" className="py-24 px-4 bg-[#251810]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#22C55E] text-center mb-12 border-4 border-[#57534E] bg-[#3D2817] py-6">
            ПРИВИЛЕГИИ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: 'Zap', 
                title: '/FLY', 
                desc: 'Возможность летать в режиме выживания',
                color: '#22C55E'
              },
              { 
                icon: 'Palette', 
                title: 'ЦВЕТНОЙ НИК', 
                desc: 'Выделись среди других игроков',
                color: '#FACC15'
              },
              { 
                icon: 'Shield', 
                title: 'РЕГИОНЫ', 
                desc: 'Защити свои постройки от гриферов',
                color: '#3B82F6'
              },
              { 
                icon: 'Package', 
                title: 'КИТЫ', 
                desc: 'Получай бонусные предметы каждый день',
                color: '#F59E0B'
              }
            ].map((privilege, idx) => (
              <Card key={idx} className="bg-[#3D2817] border-4 border-[#57534E] hover:border-[#22C55E] transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: privilege.color }}
                    >
                      <Icon name={privilege.icon as any} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#22C55E] text-xl">{privilege.title}</CardTitle>
                      <CardDescription className="text-[#D4D4D4] text-sm mt-1">
                        {privilege.desc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1C0F08] border-t-4 border-[#57534E] py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#22C55E] border-4 border-black"></div>
            <p className="text-xl text-[#22C55E]">MINE SERVER</p>
          </div>
          <p className="text-[#A8A29E] text-sm">
            © 2024 Mine Server. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}