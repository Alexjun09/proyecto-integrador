import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import mark from "../public/mark.png";
import name from "../public/name.png";
import facebook from "../public/facebook.png";
import instagram from "../public/instagram.png";
import linkedin from "../public/linkedin.png";
import twitter from "../public/twitter.png";

const Footer = () => {
  return (
    <footer className="flex flex-col h-[270px] bg-secondary text-white">
      <div className="">
        <hr className="border border-main w-[90%] m-auto" />
      </div>
      <div className="flex flex-row justify-around mx-44 text-white text-xl">
        <div className="flex flex-col my-8">
          <Link
            href={"/sobrenosotros"}
            className="rounded-2xl px-2 hover:shadow-md hover:shadow-main hover:bg-main"
          >
            Sobre Nosotros
          </Link>
          <Link
            href={"/quienessomos"}
            className="rounded-2xl px-2 hover:shadow-md hover:shadow-main hover:bg-main"
          >
            Quienes Somos
          </Link>
          <Link
            href={"/tutorial"}
            className="rounded-2xl px-2 hover:shadow-md hover:shadow-main hover:bg-main"
          >
            Tutorial
          </Link>
          <Link
            href={"/contacto"}
            className="rounded-2xl px-2 hover:shadow-md hover:shadow-main hover:bg-main"
          >
            Contacto
          </Link>
        </div>
        <div className="flex flex-row gap-7 items-center">
          <Link href={""} className="">
            <Image
              className=""
              src={twitter}
              alt="twitter"
              height={50}
            />
          </Link>
          <Link href={""}>
            <Image src={instagram} alt="instagram" height={50} />
          </Link>
        </div>
        <div className="flex flex-col justify-center ">
          <Link href={"/"}>
            <Image src={name} alt="nombre" height={120} className="" />
          </Link>
        </div>
        <div className="flex flex-row gap-7 items-center">
          <Link href={""} className="">
            <Image className="" src={linkedin} alt="linkedin" height={50} />
          </Link>
          <Link href={""}>
            <Image src={facebook} alt="facebook" height={50} />
          </Link>
        </div>
        <div className="flex flex-col justify-center ">
          <Link
            className="bg-main p-5 px-20 text-4xl rounded-full hover:bg-white hover:text-main"
            href={"/signin"}
          >
            <b>App</b>
          </Link>
        </div>
      </div>
      <div className="">
        <hr className="border w-[90%] border-main m-auto" />
      </div>
    </footer>
  );
};

export default Footer;
