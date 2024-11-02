import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div id="projects">
      <p className="text-4xl font-extrabold text-center bg-black py-5" data-aos="flip-right">My Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 black py-5" data-aos="zoom-in">
        {/* Project Cards */}
        <Link href="https://birthday-wish-app-ivnf.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project3.PNG"
              alt="Birthday Wish App"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Birthday Wish App</p>
          </div>
        </Link>

        <Link href="https://governor-website-with-next-js.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project4.PNG"
              alt="Governor Sindh Website"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Governor Sindh Website</p>
          </div>
        </Link>

        <Link href="https://to-do-list-app-eight-wine.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project6.PNG"
              alt="To Do List App"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">To Do List App</p>
          </div>
        </Link>

        <Link href="https://number-guessing-game-lrzc.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative text-center">
            <Image
              src="/images/project5.PNG"
              alt="Number Guessing Game"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Number Guessing Game</p>
          </div>
        </Link>

        <Link href="https://hackathon-milestone-5-nine-chi.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project11.PNG"
              alt="Shareable Resume Builder"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Shareable Resume Builder</p>
          </div>
        </Link>

        <Link href="https://hackathon-milestone-1and2.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project8.PNG"
              alt="Static Resume Builder"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Static Resume Builder</p>
          </div>
        </Link>

        <Link href="https://hackathon-milestone-3-jet.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project9.PNG"
              alt="Dynamic Resume Builder"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Dynamic Resume Builder</p>
          </div>
        </Link>

        <Link href="https://hackathon-milestone-4-two.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative text-center">
            <Image
              src="/images/project10.PNG"
              alt="Editable Resume Builder"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Editable Resume Builder</p>
          </div>
        </Link>

        <Link href="https://html-css-assignment-lime.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project7.PNG"
              alt="PIAIC Clone Website"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">PIAIC Clone Website</p>
          </div>
        </Link>

        <Link href="https://weather-widget-hb9lnihoe-rubab-bukharis-projects.vercel.app/" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/project2.PNG"
              alt="Weather Widget"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <p className="p-2 font-bold text-center bg-black text-white">Weather Widget</p>
          </div>
        </Link>
      </div>
 </div>
  );
}
