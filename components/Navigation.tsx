"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={active ? "active" : ""}
          >{link.label}</Link>
        );
      })}
    </>
  );
};

export { Navigation };
