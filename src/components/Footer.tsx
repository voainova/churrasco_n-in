export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
          <img
            src="/assets/Logo Núcleo Inovação 2025 melhorada.png"
            alt="AEMFLO / CDL São José"
            className="h-20 w-auto object-contain"
          />
          <img
            src="/assets/logo completa colorida Inovação e Negócios.jpeg"
            alt="Núcleo de Inovação e Negócios"
            className="h-20 w-auto object-contain"
          />
        </div>
        <div className="font-display font-bold text-lg mb-2 text-gray-900">Núcleo de Inovação e Negócios</div>
        <div className="text-gray-700 text-sm">AEMFLO / CDL São José-SC</div>
        <div className="text-gray-500 text-xs mt-4">Proposta de Patrocínio • Churrasco da Inovação e Negócios 2026</div>
      </div>
    </footer>
  );
}
