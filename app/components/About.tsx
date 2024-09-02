import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src={"/images/ikups.jpeg"}
              width={500}
              height={500}
              alt="bangunanIkups"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Mengenai Kami
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Oxsika Ikups mempunyai sejarah yang kaya dalam menyediakan
              pendidikan berkualiti tinggi kepada pelajar dari pelbagai latar
              belakang. Ditubuhkan pada tahun 2004, kami telah menjadi pusat
              pembelajaran yang diiktiraf, dengan misi untuk menawarkan
              pendidikan yang menyeluruh dan memupuk perkembangan peribadi.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Kami berkomitmen untuk menghubungkan alumni dan sekolah,
              menggalakkan penglibatan, kerjasama, dan peluang untuk
              pertumbuhan. Sama ada anda ingin menghubungi semula rakan lama,
              mencari peluang rangkaian, atau hanya mengikuti berita dan acara
              sekolah, Rangkaian Alumni Oxsika Ikups sedia untuk menyokong anda.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Kami menggalakkan anda untuk meneroka laman web kami, menyertai
              acara, dan berkongsi pengalaman anda dengan alumni lain.
              Bersama-sama, kita dapat terus membina komuniti yang kuat dan
              bertenaga yang menghargai legasi sekolah kita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
