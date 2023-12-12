import Link from "next/link";
import Image from "next/image";

import MainNav from "@/components/main-nav";
import MobileMenu from "@/components/mobileMenu";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b fixed w-full bg-white z-40 ">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className=" hidden cp:flex">
            <Image src="/logo.jpg" width={55} height={55} alt="Logo"  className="max-w-xs "/>
          </Link>
          <MainNav data={categories} />
          <MobileMenu data={categories} />
          <div className="grid cp:hidden flex-1 justify-items-center">
            <Link href="/">
              <Image src="/logo.jpg" width={55} height={55} alt="Logo"/>
            </Link>
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
