"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto items-center gap-x-4 flex ">
      <Button onClick={() => router.push('/cart')} className="flex items-center bg-white px-4 py-2">
        <ShoppingCart
          size={20}
          color="black"
        />
        <span className="ml-2 text-md font-medium text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
 
export default NavbarActions;