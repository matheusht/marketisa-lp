"use client";

import { Photo } from "../components/Photo";
import { Social } from "../components/Social";
import { Stats } from "../components/Stats";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Whatsapp from "@/app/social/page";
import MarketisaLettermark from "../components/icons/Lettermark";

export default function History() {
  return (
    <>
      <section className="h-full scroll-smooth xl:scroll-auto">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Marketing</span>
              <div className="">
                <h1 className="h1 mb-6">
                  Hello Im <br />{" "}
                  <span className="text-accent">
                    <MarketisaLettermark />
                  </span>
                </h1>
              </div>
              <p className="max-w-[500px] mb-9 text-white/80">
                I Excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div>{/* photo */}</div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
