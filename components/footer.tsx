import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/images/logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="h-6 w-6"
              />
              <span className="font-bold">Oxsika</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting and empowering SBPI Kubang Pasu alumni since 2010.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#events"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Alumni Directory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: oxsika@gmail.com</li>
              <li className="text-muted-foreground">Phone: 1234567</li>
              <li className="text-muted-foreground">
                Address: SBPI Kubang Pasu, Kedah
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oxsika iKUPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
