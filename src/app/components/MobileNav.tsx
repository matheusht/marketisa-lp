"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import MarketisaLogo from "./icons/logo";
import { Social, socials } from "./Social";
import { Button } from "./ui/button";
import { useState } from "react";
export function MobileNav({ containerStyles, iconStyles }: any) {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center ">
          <CiMenuFries
            className="text-[40px] text-accent"
            aria-label="Hamburgur Menu"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
          <div className="mt-32 mb-20 text-center text-2xl flex items-center justify-center">
            <Link to="/" spy={true} offset={50} duration={1000} smooth={true}>
              <h1 className="text-4xl font-semibold ">
                <MarketisaLogo width={200} />
              </h1>
            </Link>
          </div>
          {/* nav */}

          <nav className=" flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <SheetClose key={index} asChild>
                  <Link
                    className={`${
                      link.path === pathname &&
                      "text-accent border-b-2 border-accent"
                    } text-xl  hover:text-accent transition-all cursor-pointer`}
                    to={link.path}
                    spy={true}
                    offset={50}
                    duration={1000}
                    smooth={true}
                    href={link.path}
                    type="submit"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              );
            })}
            <Link
              to="footer"
              smooth={true}
              spy={true}
              offset={50}
              duration={1500}
              href="#footer"
            >
              <Button>Fale conosco</Button>
            </Link>
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
