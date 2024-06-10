"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "início",
    path: "#header",
  },
  {
    name: "Quem Somos",
    path: "#history",
  },
  {
    name: "O que fazemos",
    path: "#services",
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
