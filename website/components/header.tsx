import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import mark from "../public/mark.png";
import name from "../public/name.png";
import menu from "../public/menu.png";

const Header = () => {
  return (
    <header className="sticky top-0 bg-secondary">
      <div className="flex flex-row sm:ml-4 md:px-4">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Link href="/" className="">
              <Image alt="logo" src={logo} height={100} />
            </Link>
            <div className="dropdown dropdown-bottom dropdown-end  sm:ml-12 md:ml-0">
              <button>
                <Image
                  src={menu}
                  alt={"menu"}
                  height={100}
                  tabIndex={0}
                  className="m-1 md:hidden"
                />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-secondary border border-main text-[45px] rounded-box w-max mt-5 mr-2"
              >
                <li>
                  <Link href={"/sobrenosotros"}>Sobre Nosotros</Link>
                </li>
                <li>
                  <Link href={"/quienessomos"}>Quienes Somos</Link>
                </li>
                <li>
                  <Link href={"/tutorial"}>Tutorial</Link>
                </li>
                <li>
                  <Link href={"/contacto"}>Contacto</Link>
                </li>
                <li>
                  <Link href={"/signin"}>App</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:hidden md:grid md:grid-cols-3 w-full mx-10 text-2xl">
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
