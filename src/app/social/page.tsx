// import { RiWhatsappFill, RiWhatsappLine } from '@remixicon/react'
"use client";

import { WhatsappIcon } from "./whatsapp";

export default function Whatsapp() {
  return (
    <>
      <div
        className="fixed bottom-3 right-5 cursor-pointer text-green"
        id="social"
      >
        <a
          id="social_icon"
          href="https://wa.me/message/3G4TM426C2UUO1"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappIcon width={80} height={82} />
        </a>
      </div>
    </>
  );
}
