"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" passHref className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              width={500}
              height={500}
              alt="Oxsika Logo"
              className="h-6 w-6"
            />
            <span className="font-bold">Oxsika</span>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex flex-1 justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/alumni" passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    Direktori Alumni
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#merchandise" passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    Merchandise
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Home
            </Link>
            <Link
              href="/alumni"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Direktori Alumni
            </Link>
            <Link
              href="/#merchandise"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Merchandise
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
