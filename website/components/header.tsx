import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import mark from "../public/mark.png";
import name from "../public/name.png";

const Header = () => {
  return (
    <header className="sticky top-0 bg-secondary">
      <div className="flex flex-row px-4">
        <div>
          <Link href="/" className="">
            <Image alt="logo" src={logo} height={100} />
          </Link>
        </div>
        <div className="grid grid-cols-3 w-full mx-10 text-2xl">
          <nav className="col-span-2  flex flex-row gap-10 items-center -mt-1 text-white">
            <Link href={"/sobrenosotros"}>
              {" "}
              <button className="hover:bg-main hover:text-secondary rounded-3xl px-3 h-12">
                Sobre Nosotros
              </button>
            </Link>

            <Link href={"/quienessomos"}>
              <button className="hover:bg-main hover:text-secondary rounded-3xl px-3 h-12">
                Quienes Somos
              </button>
            </Link>

            <Link href={"/tutorial"}>
              <button className="hover:bg-main hover:text-secondary rounded-3xl px-3 h-12">
                Tutorial{" "}
              </button>
            </Link>

            <Link href={"/contacto"}>
              <button className="hover:bg-main hover:text-secondary rounded-3xl px-3 h-12">
                Contacto
              </button>
            </Link>
          </nav>
          <div className="grid grid-cols-1 justify-items-end flex items-center">
            <Link href={"/signin"}>
              <button className="bg-white text-secondary hover:bg-main rounded-3xl h-12 px-10">
                <b>App</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-main" />
    </header>
  );
};

export default Header;
