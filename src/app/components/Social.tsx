import { Link } from "react-scroll";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const socials = [
  { icon: <FaInstagram />, path: "https://www.instagram.com/market.iisa" },
  // { icon: <FaLinkedinIn />, path: "/" },
  { icon: <FaWhatsapp />, path: "https://wa.me/5544998625745" },
];

export function Social({ containerStyles, iconStyles }: any) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            className={iconStyles}
            alt="Social"
            href={item.path}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
