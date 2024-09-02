const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Oxsika Ikups</h3>
            <p className="text-gray-400">
              Kami menghubungkan alumni, menggalakkan kerjasama, dan
              mempromosikan pertumbuhan melalui rangkaian kami.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Halaman Utama</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Halaman Utama
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-gray-300">
                  Berita
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-gray-300">
                  Acara
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Oxsika Ikups. Semua hak cipta
            terpelihara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
