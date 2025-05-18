import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl font-bold mb-2">Lammveloka</h1>
          <p className="text-gray-400">
            Jelajahi indahnya dunia Asia bersama Lammveloka.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Link Cepat</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Destinasi Wisata
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Tentang Lammveloka
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kontak Kami
              </a>
            </li>
          </ul>
        </div>

        {/* Info tambahan */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Informasi</h2>
          <p className="text-gray-400">
            Alamat: Jalan Contoh No. 123, Planet Cikarang
            <br />
            Email: info@lammveloka.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        &copy; 2024 <span className="font-medium">Lammveloka</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
