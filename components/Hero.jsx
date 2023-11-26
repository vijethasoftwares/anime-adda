import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <section className="text-gray-300 min-h-screen body-font">
        <div className="container mx-auto flex md:px-12 px-5 gap-6 justify-center py-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-lg bg-red-900 bg-opacity-50"
              alt="hero"
              src="/hero.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
              Explore The <span className="red-gradient">Diverse Realms</span>{" "}
              of Anime Magic
            </h1>
            <p className="mt-8 leading-relaxed">
            Dive into the captivating world of anime with our immersive hero section that sets the stage for an unforgettable experience. The dark-themed ambiance creates a mysterious and enticing atmosphere, inviting users to explore the vast universe of animated adventures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
