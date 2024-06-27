"use client";

import { Link } from "react-scroll";
import MarketisaLogo from "../components/icons/logo";
import { Social } from "../components/Social";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  return (
    <footer id="footer" className="footer pt-12 xl:pt-[150px]">
      <div className="bg-[#5c5c72] h-[2px]"></div>
      <div className="container mx-auto pb-12 xl:pb-[100px] px-4 md:px-8">
        <div className="flex justify-center items-center mt-12">
          <Link
            to="main"
            smooth={true}
            spy={true}
            offset={50}
            duration={750}
            href="#main"
          >
            <MarketisaLogo width={100} />
          </Link>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-start mt-8 gap-8">
          <div className="flex flex-col gap-y-0 mb-4 text-center xl:text-left">
            <h3
              className="text-[28px] m-0 p-0"
              style={{ marginBottom: "-5px" }}
            >
              O mundo precisa conhecer o seu trabalho.
            </h3>
            <p className="text-[24px] m-0 p-0">
              <b>É o nosso trabalho fazer disso realidade.</b>
            </p>
          </div>
          <div className="right_items text-center xl:text-right xl:pr-20 w-full xl:w-auto">
            <div className="mb-4 xl:mb-0">
              <p className="text-[20px]">(44) 99862-5745</p>
              <p className="mb-2 text-[18px]">agenciamarketisa@gmail.com</p>
            </div>
            <div className="flex justify-center xl:justify-end mt-4 xl:mt-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
