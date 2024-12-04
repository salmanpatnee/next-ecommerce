import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/" },
  { label: "About", href: "/" },
  { label: "Sign Up", href: "/" },
];

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-12">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref >
              <NavigationMenuLink className={` text-black text-base hover:underline`}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
