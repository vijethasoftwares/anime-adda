import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@{new Date().getFullYear()} Anime Adda - Designed & Developed by By Arsh</p>
    </footer>
  );
}

export default Footer;