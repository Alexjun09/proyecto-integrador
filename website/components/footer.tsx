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
          <Link href={"/sobrenosotros"}>Sobre Nosotros</Link>
          <Link href={"/quienessomos"}>Quienes Somos</Link>
          <Link href={"/tutorial"}>Tutorial</Link>
          <Link href={"/contacto"}>Contacto</Link>
        </div>
        <div className="flex flex-row gap-7 items-center">
          <Link href={""} className="">
            <Image
              className="align-bottom"
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
            className="bg-main p-5 px-20 text-4xl rounded-full"
            href={"/app"}
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