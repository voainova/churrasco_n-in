export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-8 flex-wrap">
        <img
          src="/assets/Logo Núcleo Inovação 2025 melhorada.png"
          alt="AEMFLO / CDL São José"
          className="h-14 md:h-16 w-auto object-contain"
        />
        <img
          src="/assets/logo completa colorida Inovação e Negócios.jpeg"
          alt="Núcleo de Inovação e Negócios"
          className="h-14 md:h-16 w-auto object-contain"
        />
      </div>
    </header>
  );
}
