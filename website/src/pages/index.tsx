import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../../public/logo.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>gLabs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-row p-4">
        <Image alt="logo" src={logo} height={80} />
        <div className="flex flex-row text-secondary text-2xl ml-10 mt-2">
          <div className="flex gap-10">
            <button className="bg-main rounded-3xl px-3 h-14">
              <a href="">Sobre nosotros</a>
            </button>
            <button className="bg-main rounded-3xl px-3 h-14">
              <a href="">Quienes Somos</a>
            </button>
            <button className="bg-main rounded-3xl px-3 h-14">
              <a href=""></a>Tutorial
            </button>
            <button className="bg-main rounded-3xl px-3 h-14">
              <a href=""></a>Contacto
            </button>
          </div>
          <button className="text-main bg-white rounded-3xl h-14 px-3 ml">
            <a href="">App</a>
          </button>
        </div>
      </header>
      <main></main>
    </>
  );
}
