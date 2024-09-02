import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 sticky top-0 h-20">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={160}
              height={160}
              alt="OxsikaLogo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div className="space-x-10 font-semibold">
          <Link href="/" className="text-white hover:text-red-900">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-red-900">
            About
          </Link>
          <Link href="/services" className="text-black hover:text-red-900">
            Gallery
          </Link>
          <Link href="/contact" className="text-black hover:text-red-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
