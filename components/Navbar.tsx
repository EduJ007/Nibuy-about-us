import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  
  // Função para recarregar a página ao clicar em "Sobre Nós"
  const handleReload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/'; // Ou o link oficial: https://nibuy-about-us.vercel.app/
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO: Agora com link para a Home/Sobre Nós */}
          <a 
            href="/" 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleReload}
          >
            <img 
              src="/logovermelha.png" 
              alt="Nibuy Logo" 
              className="h-12 w-auto object-contain" 
            />
            <span className="text-2xl font-black text-[#ff5722]">
                𝙉𝙞𝙗𝙪𝙮
            </span>
          </a>

          {/* MENU CENTRAL: Agora com links reais */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a 
              href="/"
              onClick={handleReload}
              className={`transition-colors cursor-pointer ${currentPage === 'about' ? 'text-[#ff5722]' : 'hover:text-[#ff5722]'}`}
            >
              Sobre Nós
            </a>
            
            <a 
              href="#" // Coloque aqui o link do seu site de produtos futuramente
              className="hover:text-[#ff5722] transition-colors cursor-pointer"
            >
              Ofertas
            </a>
            
            <a 
              href="mailto:nibuyoficial@nibuy.com.br"
              className={`transition-colors cursor-pointer ${currentPage === 'contact' ? 'text-[#ff5722]' : 'hover:text-[#ff5722]'}`}
            >
              Contato
            </a>
          </div>

          {/* BOTÃO DE AÇÃO DIREITA: Com link para o site de produtos */}
          <a 
            href="#" // Coloque o link aqui
            className="bg-[#ff5722] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e64a19] transition-all shadow-md shadow-orange-100"
          >
            Ver Ofertas
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;