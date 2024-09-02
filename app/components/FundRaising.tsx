const Fundraising: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Dana Pengumpulan
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Kempen Pengumpulan Terbaru
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Kami sedang menjalankan kempen pengumpulan dana untuk [Tujuan
            Kempen]. Matlamat kami adalah untuk mengumpulkan RM10,000 bagi
            [Tujuan/Projek].
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Tarikh akhir: 31 Disember 2024
          </p>
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Jumlah Dana Terkumpul
            </h4>
            <p className="text-2xl font-bold text-blue-600">RM5,200</p>
          </div>
          <a
            href="/donate"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Sumbang Sekarang
          </a>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Cara Untuk Menyumbang
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Anda boleh menyumbang kepada kempen kami dengan cara berikut:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Melalui pindahan bank ke akaun berikut: [Nombor Akaun]</li>
            <li>
              Dengan menggunakan kad kredit/debit di laman web kami:{" "}
              <a href="/donate" className="text-blue-600 hover:text-blue-800">
                Sumbang Sekarang
              </a>
            </li>
            <li>Melalui cek yang dibuat atas nama: [Nama Penerima]</li>
          </ul>
          <p className="text-lg text-gray-700">
            Setiap sumbangan anda akan membantu mencapai matlamat kami dan
            menyokong [Tujuan/Projek]. Terima kasih atas sokongan anda!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fundraising;
