import { Link } from "react-scroll";
import {
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const socials = [
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
          <Link to={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
