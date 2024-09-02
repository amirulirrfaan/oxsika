import Image from "next/image";

const NewsAndUpdates: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Berita & Kemas Kini
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src={"/images/gegar.jpeg"}
              width={500}
              height={500}
              alt="gegar"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tajuk Berita 1
            </h3>
            <p className="text-gray-700 mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <a
              href="/news/1"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Baca Lagi
            </a>
          </div>

          {/* News Item 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="/images/news2.jpg" // Replace this with your image path
              alt="Berita 2"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tajuk Berita 2
            </h3>
            <p className="text-gray-700 mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
            <a
              href="/news/2"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Baca Lagi
            </a>
          </div>

          {/* News Item 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="/images/news3.jpg" // Replace this with your image path
              alt="Berita 3"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tajuk Berita 3
            </h3>
            <p className="text-gray-700 mb-4">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur.
            </p>
            <a
              href="/news/3"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Baca Lagi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
