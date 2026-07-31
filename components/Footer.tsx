export default function Footer() {
  return (
    <footer className="bg-[#081C3A] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-[#D4AF37]">
          RUMUNA
        </h2>

        <p className="mt-3 text-sm text-gray-300">
          Rajshahi University Model United Nations Association
        </p>

        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} RUMUNA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}