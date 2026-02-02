import React from 'react';

const partners = [
  { name: 'Amazon', color: 'text-blue-900', url: 'https://nibuy-produtos.vercel.app/' },
  { name: 'Shopee', color: 'text-orange-600', url: 'https://nibuy-produtos.vercel.app/' },
  { name: 'Magalu', color: 'text-blue-500', url: 'https://nibuy-produtos.vercel.app/' },
  { name: 'Mercado Livre', color: 'text-yellow-500', url: 'https://nibuy-produtos.vercel.app/' },
];

const PartnerLogos: React.FC = () => {
  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-[black] uppercase tracking-widest mb-8">
          Curadoria das Melhores Lojas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl md:text-3xl font-bold ${partner.color} select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer`}
            >
              {partner.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;