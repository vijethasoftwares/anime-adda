"use client";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const handleShareOnTwitter = () => {
    const tweetText = "Check out Anime Adda, your go-to place for all things anime! at: https://anime-adda.vercel.app 🌟📺 #AnimeAdda #AnimeCommunity";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    // Open a new window for sharing on Twitter
    window.open(twitterUrl, "_blank");
  };

  return (
    <header className="py-3 px-2">
      <div className="mx-auto container flex justify-between items-center">
        <div className="w-auto h-10 rounded-md flex flex-row items-center gap-2">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Logo"
            className="w-auto h-full"
          />
          <span className="text-lg font-semibold">Anime Adda</span>
        </div>
        <div
          className="flex flex-row items-center gap-2 py-2 px-3 bg-[rgba(225,225,225,0.01)] hover:bg-[rgba(225,225,225,0.1)] rounded-md cursor-pointer"
          onClick={handleShareOnTwitter}
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="h-5 w-5 fill-slate-400"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
          </svg>
          Share on Twitter
        </div>
      </div>
    </header>
  );
}