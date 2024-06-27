import Link from "next/link";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const socials = [
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/agenciamarketisa/",
  },
  // { icon: <FaLinkedinIn />, path: "/" },
  { icon: <FaWhatsapp />, path: "https://wa.me/5544998625745" },
];

export function Social({ containerStyles, iconStyles }: any) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            className={iconStyles}
            href={item.path}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
