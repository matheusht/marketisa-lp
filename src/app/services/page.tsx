"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "",
    title: "Desenvolvimento de Marca",
    description:
      "Criamos a identidade da sua marca com estratégia, estudo e personalização. Desde o logo até o tom de voz da sua marca, queremos que a comunicação e o posicionamento sejam impactantes e longe do clichê.",
    href: "",
  },
  {
    num: "",
    title: "Conteúdos Estratégicos",
    description:
      "Com sua marca estabelecida, desenvolvemos conteúdos estratégicos para alcançar seu público-alvo. Oferecemos uma entrega completa que inclui a definição de estratégias em um calendário, gravação e edição de vídeos/fotos, criação de legendas e postagem nas plataformas mais relevantes para o seu negócio.",
    href: "",
  },
  {
    num: "",
    title: "Organização de Eventos",
    description:
      "Usando os metódos Disney ao nosso favor, planejamos e organizamos eventos que proporcionam uma experiência marcante ao seu público. Cada detalhe é pensado para garantir que a comunicação da sua marca seja clara e eficaz.",

    href: "",
  },
  {
    num: "",
    title: "Soluções de Marketing Personalizadas",
    description:
      "Se além dos serviços anteriores apresentados você quer mais, então, esse é o nosso queridinho. Atendemos sua necessidade quanto a comunicação, desde a contratação de serviços de outdoor com textos e imagens impactantes até personalização de brinde para o lançamento da sua marca, estamos aqui para ajudar sua empresa a se destacar. Com a Marketisa, você sai da caixa e se conecta de forma inovadora com seu público.",
    href: "",
  },
];

import { motion } from "framer-motion";
export default function Services() {
  return (
    <section
      id="services"
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-20"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-11">
          <h1 className="h1"> O que fazemos</h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
