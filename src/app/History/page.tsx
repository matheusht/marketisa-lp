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
                <div className="h1 mb-6 text-[80px]">
                  Quem está
                  <br /> <h1 className="text-[65px] ">por trás da</h1>
                  <span className="text-accent">
                    <MarketisaLettermark />
                  </span>
                </div>
              </div>
              <p className="max-w-[650px] mb-9 text-white/80">
                Sou Isabela Theodoro, mourãoense, formada em Publicidade e
                Propaganda pela Unicesumar. Gosto de ressaltar que a Isabela têm
                muitos lados, o lado família, amiga, profissional e criativo.{" "}
                <br />
                Quando criança gostava de brincar de desenhar quadros, de ser
                artista, organizar pequenos “eventos” e hoje vejo que sempre
                sonhei grande.
                <br />
                Sempre gostei de tecnologia, redes sociais e foi justamente por
                isso, que ganhei 2 prêmios durante a graduação como melhor
                trabalho audiovisual. Com mais de cinco anos de experiência com
                marketing, mudei minha percepção sobre experiência do consumidor
                ao fazer um curso com métodos Disney.
                <br />
                Foi trabalhando com marketing que entendi que os detalhes
                importam e que pensar em estratégias e métricas só faz sentido,
                quando se leva em consideração a essência da marca.
                <br />
                E a Marketisa nasceu com o propósito de solucionar problemas,
                encorajar e principalmente mostrar que é possível fazer
                marketing de qualidade de uma maneira autêntica.
                <br />
                Meu compromisso é estar atenta ao mercado e analisar tendências
                para fazer as melhores entregas. Te convido a vir comigo para eu
                te guiar nesse processo.
                <br />
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
