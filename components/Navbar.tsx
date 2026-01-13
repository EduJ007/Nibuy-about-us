import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* BLOCO DA LOGO: Alinhado e com clique para navegar */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => onNavigate('about')}
          >
            <img 
              src="/logovermelha.png" 
              alt="Nibuy Logo" 
              className="h-9 w-auto object-contain" 
            />
            <span className="text-2xl font-black text-[#ff5722]">
               𝙉𝙞𝙗𝙪𝙮
            </span>
          </div>

          {/* MENU CENTRAL: Desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <button 
              onClick={() => onNavigate('about')}
              className={`transition-colors ${currentPage === 'about' ? 'text-[#ff5722]' : 'hover:text-[#ff5722]'}`}
            >
              Sobre Nós
            </button>
            <button className="hover:text-[#ff5722] transition-colors">
              Ofertas
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${currentPage === 'contact' ? 'text-[#ff5722]' : 'hover:text-[#ff5722]'}`}
            >
              Contato
            </button>
          </div>

          {/* BOTÃO DE AÇÃO DIREITA */}
          <button className="bg-[#ff5722] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e64a19] transition-all shadow-md shadow-orange-100">
            Ver Ofertas
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;