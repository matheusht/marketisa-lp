/* eslint-disable react/no-unescaped-entities */
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
      <section id="history" className="h-full scroll-smooth xl:scroll-auto">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <div className="">
                <div className="h1 mb-6 text-[60px] xl:text-[80px]">
                  Quem está
                  <br />{" "}
                  <h1 className=" text-[60px] xl:text-[80px] ">Por trás da</h1>
                  <span className="text-accent">
                    <MarketisaLettermark />
                  </span>
                </div>
              </div>
              <p className="max-w-[650px] mb-9 text-white/80">
                Sou Isabela Theodoro, ou pode me chamar de "<b>Isa</b>". Formada
                em Publicidade e dona da Marketisa. Trabalhei com clientes de
                diversos segmentos em agências e no departamento de Marketing de
                empresas de moda, gastronomia e educação.
                <br />
                <br />
                Tenho muitos lados: o lado família, amiga, profissional e
                criativo. Quando criança, adorava desenhar quadros no piso de
                casa e organizar “eventos” como um jantar numa quarta qualquer.
                Desde então, percebo que <b>sempre sonhei grande</b>. Ao longo
                da minha trajetória, ganhei dois prêmios de melhor trabalho
                audiovisual. Porém, minha visão mudou completamente quando
                conheci os <b>métodos Disney</b> sobre a{" "}
                <b>experiência do consumidor e encantamento</b>. Percebi que não
                existe fórmula mágica para <b>comunicar</b>, porque essa não é
                uma ciência exata — e ainda bem que não é.
                <br />
                <br />A verdadeira essência do Marketing está na conexão com os
                clientes e esse é o propósito da Marketisa. Te convido a vir
                comigo para eu te guiar nesse processo.
                <br />
                <b>
                  O mundo precisa conhecer o seu trabalho. E é nosso trabalho
                  fazer disso realidade.
                </b>
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
            <div>{/* spacer */}</div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:ml-[-50px]">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
