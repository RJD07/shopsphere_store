"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { AlignJustify, XSquare } from "lucide-react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MobileMenu: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="mx-6 cp:hidden">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-md font-medium transition-colors hover:text-black"
      >
        <AlignJustify size={20} />
      </button>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex justify-end p-4">
            <button onMouseDown={closeMobileMenu} className="text-black">
              <XSquare size={25} />
            </button>
          </div>
          <div className="flex flex-col items-center pt-8">
            <div className="grid cp:hidden flex-1 justify-items-center pb-2">
              <Link href="/" onClick={closeMobileMenu}>
                <Image src="/logo.jpg" width={110} height={110} alt="Logo" />
              </Link>
            </div>
            <div className="pb-8 text-3xl font-bold">Categories</div>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={closeMobileMenu} // Close menu when a category link is clicked
                className={cn(
                  "text-2xl font-medium mb-4 transition-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
