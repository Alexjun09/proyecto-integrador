import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../../public/logo.png";
import mark from "../../public/mark.png";
import name from "../../public/name.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>gLabs App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-row justify-center">
        <div className=" sm:w-[80%] md:w-[20%] flex flex-col justify-center">
          <div className="text-secondary bg-main rounded-3xl sm:my-10 md:mt-32 md:mb-96">
            <h1 className="text-secondary m-4">
              <b>Crea una cuenta para acceder a la aplicación</b>
            </h1>
            <form action="/app" className="flex flex-col justify-start m-4">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="email"
                className="bg-white text-secondary rounded-md"
                required
                id="email"
              />
              <br />
              <label htmlFor="" className="text-sm">
                Contraseña
              </label>
              <input
                type="password"
                className="bg-white text-secondary rounded-md"
                required
                id="pass1"
              />
              <br />
              <label htmlFor="" className="text-sm">
                Repetir Contraseña
              </label>
              <input
                type="password"
                className="bg-white text-secondary rounded-md"
                required
                id="pass2"
              />
              <br />
              <div className="flex flex-row">
                <input type="checkbox" className="" required id="terms" />
                <p>&nbsp;Acepto los terminos de servicio</p>
              </div>
              <div className="flex flex-row mt-5">
                <div className="">
                  <button
                    type="submit"
                    className="bg-secondary rounded-3xl text-white px-3 p-2"
                  >
                    Crear Cuenta
                  </button>
                </div>
            
                <div className="flex items-center text-sm ml-5">
                  <Link href={"/contacto"} className="text-white">
                    Problemas para hacer sign in?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
