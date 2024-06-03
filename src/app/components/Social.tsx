import Link from "next/link";

import {
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "https://www.instagram.com/market.iisa/" },
  { icon: <FaFacebook />, path: "/" },
  { icon: <FaLinkedinIn />, path: "/" },
  { icon: <FaYoutube />, path: "/" },
];

export function Social({ containerStyles, iconStyles }: any) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
