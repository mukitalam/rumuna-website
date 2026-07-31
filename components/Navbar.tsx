import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#081C3A]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="RUMUNA Logo"
            width={55}
            height={55}
          />

          <div>
            <h1 className="text-2xl font-bold text-[#D4AF37]">
              RUMUNA
            </h1>

            <p className="text-xs text-gray-300">
              Rajshahi University Model United Nations Association
            </p>
          </div>

        </div>

        {/* Menu */}

        <ul className="hidden lg:flex gap-8 text-white">

          <li className="hover:text-[#D4AF37] cursor-pointer">
            Home
          </li>

          <li className="hover:text-[#D4AF37] cursor-pointer">
            About
          </li>

          <li className="hover:text-[#D4AF37] cursor-pointer">
            Conferences
          </li>

          <li className="hover:text-[#D4AF37] cursor-pointer">
            Events
          </li>

          <li className="hover:text-[#D4AF37] cursor-pointer">
            Gallery
          </li>

          <li className="hover:text-[#D4AF37] cursor-pointer">
            Contact
          </li>

        </ul>

        <button className="hidden lg:block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Register
        </button>

      </div>

    </nav>
  );
}
