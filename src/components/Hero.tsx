{/* eslint-disable-next-line react/no-unescaped-entities */}


import Image from "next/image";

export default function Hero() {
  return (
    <div>
    <div
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-no-repeat bg-left bg-cover p-6 md:p-20"
      style={{ backgroundImage: "url('/images/background.png')"  }} // Optional: use if you need a background image
    >

    
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
        {/* Profile Image */}
        <Image src="/images/profile.png" alt="profile" width={400} height={400} className="rounded-2xl" />

        {/* Right Side Text */}
        <div className="ml-6" data-aos="fade-up-right">
          <p className="text-4xl md:text-8xl font-serif font-extrabold text-white">I am Rubab Bukhari</p>
          
          <p className="text-lg md:text-xl font-semibold mt-4 text-white">
            I'm a frontend developer passionate about creating clean, responsive, and user-friendly web applications.
            With expertise in TypeScript, Next.js, HTML, CSS, and Tailwind CSS.
          </p>
        </div>
      </div>
  </div>
    </div>
  );
}
