"use client";

import { Link } from "react-scroll";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "Início",
    path: "header",
  },
  {
    name: "Quem somos",
    path: "history",
  },
  {
    name: "O que fazemos",
    path: "services",
  },
];

export function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            key={index}
            spy={true}
            offset={50}
            duration={1000}
            smooth={true}
            href={link.path}
            className={`${
              link.path === pathname &&
              "text-accent border-b-2 border-accent cursor-pointer"
            } font-medium hover:text-accent transition-all cursor-pointer `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
