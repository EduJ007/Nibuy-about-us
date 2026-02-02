import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  
  const handleReload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/'; 
  };

  return (
    // Reduzi o padding vertical para py-2 para não ficar exagerado
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mantive o h-20 para dar suporte à logo h-14, mas com o py-2 o visual fica mais slim */}
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO: Tamanho h-14 conforme pedido */}
          <a 
            href="https://nibuy-home-page.vercel.app/" 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleReload}
          >
            <img 
              src="/logovermelha.png" 
              alt="Nibuy Logo" 
              className="h-14 w-auto object-contain" 
            />
            <span className="text-3xl font-black text-[#ff5722]">
                𝙉𝙞𝙗𝙪𝙮
            </span>
          </a>

          {/* MENU CENTRAL */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a 
              href="https://sobre-nibuy.vercel.app/"
              onClick={handleReload}
              className="bg-[#ff5722] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#e64a19] transition-all shadow-md shadow-orange-100 active:scale-95 flex items-center justify-center"
            >
              Sobre Nós
            </a>
            
            <a 
              href="https://nibuy-central-ajuda.vercel.app/" 
              className="text-gray-600 hover:text-[#ff5722] transition-colors cursor-pointer"
            >
              Central de ajuda
            </a>
            
            <a 
              href="https://nibuy-contact.vercel.app/"
              className="text-gray-600 hover:text-[#ff5722] transition-colors cursor-pointer"
            >
              Contato
            </a>
          </div>

          {/* BOTÃO DE AÇÃO DIREITA */}
          <a 
            href="https://nibuy-produtos.vercel.app/" 
            className="bg-[#ff5722] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#e64a19] transition-all shadow-md shadow-orange-100 active:scale-95"
          >
            Ver Ofertas
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;