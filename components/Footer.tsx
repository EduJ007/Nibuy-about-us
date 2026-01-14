import React from 'react';
import { Instagram, Facebook, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* COLUNA 1: LOGO E DESCRIÇÃO */}
        <div className="col-span-1 md:col-span-2">
          <span className="text-3xl font-black text-[#ff5722]">
            𝙉𝙞𝙗𝙪𝙮
          </span>
          <p className="mt-4 text-gray-400 max-w-sm">
            O seu shopping de afiliados inteligente. Curadoria das melhores ofertas da Amazon, Shopee, Magalu e muito mais em um só lugar.
          </p>
          
          {/* REDES SOCIAIS */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#ff5722] transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#ff5722] transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#ff5722] transition-all duration-300">
              <Music2 size={20} />
            </a>
          </div>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO DO ECOSSISTEMA */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#ff5722]">Explorar</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="https://nibuy-about-us.vercel.app/" className="hover:text-white transition-colors">Sobre a Nibuy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ofertas (Em breve)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
          </ul>
        </div>

        {/* COLUNA 3: CONTATO DIRETO */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#ff5722]">Contato</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <a 
                href="mailto:nibuyoficial@nibuy.com.br" 
                className="hover:text-white transition-colors cursor-pointer"
              >
                nibuyoficial@nibuy.com.br
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Trabalhe Conosco
              </a>
            </li>
          </ul>
        </div>
      </div> {/* <-- ESSA DIV ESTAVA FALTANDO FECHAR AQUI */}

      {/* RODAPÉ FINAL */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>© 2026 Nibuy - O Shopping dos Afiliados. Todos os direitos reservados.</p>
        <p className="mt-2 text-[10px] opacity-50">Links de afiliados podem gerar comissão sem custo adicional para o comprador.</p>
      </div>
    </footer>
  );
};

export default Footer;