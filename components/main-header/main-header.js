import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-backgroung";
import NavLnik from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLnik href="/meals">Browse Meals</NavLnik>
            </li>
            <li>
              <NavLnik href="/community">community</NavLnik>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
