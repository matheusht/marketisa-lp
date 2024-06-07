"use client";

import MarketisaLogo from "../components/icons/logo";
import { Social } from "../components/Social";

export default function Footer() {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="bg-[#5c5c72] h-[2px]"></div>
      <div className="container mx-auto pb-12 xl:pb-[100px] px-4 md:px-8">
        <div className="flex justify-center items-center mt-12">
          <MarketisaLogo width={100} />
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-start mt-8 gap-8">
          <div className="flex flex-col gap-y-4 mb-4 text-center xl:text-left">
            <h3 className="text-[28px]">
              O mundo precisa conhecer o seu trabalho.
            </h3>
            <p className="text-[24px]">
              É o nosso trabalho fazer disso realidade.
            </p>
          </div>
          <div className="right_items text-center xl:text-right xl:pr-20">
            <p>Isabela Theodoro Marketing Serviços LTDA.</p>
            <p>(44) 999830-6069 | isabelatheodoromarketing@gmail.com</p>
            <div className="flex justify-center xl:justify-end mt-4">
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
