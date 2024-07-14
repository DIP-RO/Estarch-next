import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import bank_payment_logo from "../../public/images/payment-gateway.eb02d190.png";
import pic from '../../public/images/1707379719303-manfare_bd-id-13.jpeg';
import logo from '../../public/images/LOGO 1.png';

export default function Footer() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.ibb.co/ZzMKDVF/vector-JUNE-2020-13.jpg')`,
        backgroundBlendMode: "overlay",
        opacity: 0.9, // Adjust opacity as needed
      }}
    >
      <div className="bg-black bg-opacity-70">
        <footer className="footer text-base-content p-10 flex flex-col lg:flex-row justify-between">
          <aside className="mb-8 lg:mb-0 lg:w-1/4">
            <Image
              src={logo}
              alt="Logo"
              width={280}
              height={300}
              className="bg-white"
            />
            <p
              className="text-3xl mt-2"
              style={{ color: "rgb(184, 149, 121)", "--tw-text-opacity": "1" }}
            >
              +880 9606999695
            </p>

            <p className="text-white mt-2"> Worktime: SAT - FRI, 10AM - 11PM</p>
            <div className="flex flex-row gap-3 mt-4">
              <div
                className="border rounded-full h-10 w-10 px-2 py-1 flex justify-center items-center"
                style={{ borderColor: "rgb(184, 149, 121)" }}
              >
                <FontAwesomeIcon
                  size="2x"
                  style={{
                    color: "rgb(184, 149, 121)",
                    "--tw-text-opacity": "1",
                  }}
                  icon={faWhatsapp}
                />
              </div>
              <div
                className="border rounded-full h-10 w-10 px-2 py-1 flex justify-center items-center"
                style={{ borderColor: "rgb(184, 149, 121)" }}
              >
                <FontAwesomeIcon
                  size="2x"
                  style={{
                    color: "rgb(184, 149, 121)",
                    "--tw-text-opacity": "1",
                  }}
                  icon={faInstagram}
                />
              </div>
              <div
                className="border rounded-full h-10 w-10 py-1 p-2 flex justify-center items-center"
                style={{ borderColor: "rgb(184, 149, 121)" }}
              >
                <FontAwesomeIcon
                  style={{
                    color: "rgb(184, 149, 121)",
                    "--tw-text-opacity": "1",
                  }}
                  icon={faFacebook}
                />
              </div>
              <div
                className="border rounded-full h-10 w-10 px-2 py-1 flex justify-center items-center"
                style={{ borderColor: "rgb(184, 149, 121)" }}
              >
                <FontAwesomeIcon
                  size="2x"
                  style={{
                    color: "rgb(184, 149, 121)",
                    "--tw-text-opacity": "1",
                  }}
                  icon={faFacebookMessenger}
                />
              </div>
            </div>
          </aside>
          <nav className="mb-8 lg:mb-0 lg:w-1/4">
            <h6
              className="font-bold uppercase text-3xl mb-4"
              style={{ color: "rgb(184, 149, 121)", "--tw-text-opacity": "1" }}
            >
              Information
            </h6>
            <ul className="text-white">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Return Policy</li>
            </ul>
          </nav>
          <nav className="mb-8 lg:mb-0 lg:w-1/4">
            <h6
              className="font-bold text-3xl uppercase mb-4"
              style={{ color: "rgb(184, 149, 121)", "--tw-text-opacity": "1" }}
            >
              Contact Info
            </h6>
            <p className="text-white mb-2">
              Bashundhara City Shopping Complex,
              <br />
              Level-3, Block-D, Shop 45, 46,
              <br />
              Panthapath, Dhaka.
            </p>
            <p className="text-white mb-2">manfarebd@gmail.com</p>
            <p className="text-white">
              09606999695 | 01948-898198
              <br />
              01730-642262 | 01845-813237
            </p>
          </nav>
          <nav className="lg:w-1/4">
            <div className="relative w-full h-72 bg-black text-white rounded-lg overflow-hidden">
              <Image
                src={pic}
                alt="Background"
                layout="responsive"
                width={720}
                height={480}
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 flex items-center p-4">
                <Image
                  src={pic}
                  alt="Logo"
                  layout="responsive"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold uppercase">Estarch</h2>
                  <p className="text-sm">597,707 followers</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <button className="flex justify-center items-center gap-2 text-xs bg-white text-black font-semibold px-4 py-2 rounded-full">
                  <FontAwesomeIcon
                    size="1x"
                    className="text-blue-600"
                    icon={faFacebook}
                  />{" "}
                  Follow Page
                </button>
              </div>
            </div>
          </nav>
        </footer>

        <div className="py-4">
          <div className="mx-auto flex items-center justify-center">
            <Image
              src={bank_payment_logo}
              alt="Bank Payment Logo"
              width={1500}
              height={48}
              className=" p-1 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
