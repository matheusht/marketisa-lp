"use client";

import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import MarketisaLogoLettermark from "./icons/LogoLettermark";

export function Header() {
  return (
    <header
      id="header"
      className="py-8 xl:py-12 text-white z-50 absolute w-full"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <div className="absolute top-5">
            <MarketisaLogoLettermark />
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
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
        </div>

        {/* mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
