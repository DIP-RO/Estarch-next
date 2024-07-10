import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    const paymentLogos = [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXi87nPggz4Oyk_rbUxrjDFfGW2Em2sBapmw&s",
          alt: "Visa",
        },
        { src: "https://i.ibb.co/RjGvvDD/download.png", alt: "MasterCard" },
        {
          src: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/02/untitled-1612637581649.jpg",
          alt: "American Express",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg",
          alt: "Other1",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6Jz-BNw96FY0Vz2TPwkN18sJA9adSxyz6Q&s",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        {
          src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg",
          alt: "Other1",
        },
        // add more logos here
      ];
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
        <footer className="footer text-base-content p-10">
          <aside>
            <img
              src="https://i.ibb.co/5GC6Ctv/photo-2024-07-10-00-19-03.jpg"
              className="h-14"
            />
            <p
              className="text-3xl"
              style={{ color: "rgb(184, 149, 121)", "--tw-text-opacity": "1" }}
            >
              +880 9606999695
            </p>

            <p className="text-white"> Worktime: SAT - FRI, 10AM - 11PM</p>
            <div className="flex flex-row gap-3">
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
          <nav>
            <h6
              className="font-bold uppercase text-3xl"
              style={{ color: "rgb(184, 149, 121)", "--tw-text-opacity": "1" }}
            >
              Information
            </h6>
          </nav>
          <nav>
            <h6
              className="font-bold text-3xl uppercase"
              style={{ color: "rgb(184, 149, 121)", "--tw-text-opacity": "1" }}
            >
              Contact Info
            </h6>
            <p className="text-white">
              Bashundhara City Shopping Complex,
              <br />
              Level-3, Block-D, Shop 45, 46,
              <br />
              Panthapath, Dhaka.
            </p>
            <p className="text-white">manfarebd@gmail.com</p>
            <p className="text-white">
              09606999695 | 01948-898198
              <br />
              01730-642262 | 01845-813237
            </p>
          </nav>
          <nav>
            <div className="relative w-72 h-48 bg-black text-white rounded-lg overflow-hidden">
              <img
                src="https://cdn.bitcommerz.com/manfare-bd/media/1707379719303-manfare_bd-id-13.jpeg" // Replace with your image URL
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 flex items-center p-4">
                <img
                  src="https://cdn.bitcommerz.com/manfare-bd/media/1707379719303-manfare_bd-id-13.jpeg" // Replace with your logo URL
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
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

        <footer className="footer text-base-content border-base-300 px-10 py-4 bg-black bg-opacity-70">
          <div className="py-4">
            <div className="container mx-auto flex items-center space-x-4">
              <div className="border-r-2 border-white pr-2">
                <span className="text-white font-semibold mr-2">Pay With</span>
              </div>
              {paymentLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 bg-white p-1 rounded"
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
