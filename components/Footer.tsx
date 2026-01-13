
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="text-3xl font-black text-[#ff5722] tracking-tighter"> 𝙉𝙞𝙗𝙪𝙮</span>
          <p className="mt-4 text-gray-400 max-w-sm">
            Sua vitrine inteligente de ofertas. Encontramos os melhores preços e você finaliza a compra com total segurança nas maiores lojas do Brasil.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Anuncie Conosco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-gray-400">
            <li>contato@nibuy.com.br</li>
            <li>Siga-nos no Instagram</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2024 Nibuy Ofertas. Todos os direitos reservados. Links de afiliados podem gerar comissão sem custo adicional para você.</p>
      </div>
    </footer>
  );
};

export default Footer;
