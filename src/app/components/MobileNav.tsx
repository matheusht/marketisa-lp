"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import MarketisaLogo from "./icons/logo";
import { Social, socials } from "./Social";
export function MobileNav({ containerStyles, iconStyles }: any) {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
          <div className="mt-32 mb-20 text-center text-2xl flex items-center justify-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold ">
                <MarketisaLogo width={200} />
              </h1>
            </Link>
          </div>
          {/* nav */}

          <nav className=" flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                  href={link.path}
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
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
