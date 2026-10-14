import { ASSETS, WHATSAPP } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-4">
          <img
            src={ASSETS.logoNucleo}
            alt="Logo Núcleo Inovação 2025"
            className="h-14 w-auto object-contain"
          />
          <img
            src={ASSETS.logoCompleta}
            alt="Logo completa Inovação e Negócios"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div>
          <p className="font-display font-bold text-gray-900 text-lg">
            Núcleo de Inovação e Negócios
          </p>
          <p className="text-gray-600">AEMFLO / CDL São José-SC</p>
        </div>

        <div className="divider-gold w-full max-w-md !bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <p className="text-gray-700">
          Dúvidas? Fale com a comissão: Douglas{" "}
          <a
            href={`https://wa.me/55${WHATSAPP.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-900 underline hover:no-underline"
          >
            {WHATSAPP}
          </a>
        </p>

        <p className="text-sm text-gray-500">
          © 2026 Churrasco da Inovação e Negócios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
