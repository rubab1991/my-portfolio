export default function Skills(){
    return(
       <div id="skills" className="flex justify between bg-black text-white">
        {/* left-side */}
 <div className="m-20">
    <p className="text-4xl font-bold text wrap" data-aos="zoom-in">Technologies I work with</p>
    <p className="text-xl font-bold text-gray-400" data-aos="flip-up">i have a solid foundation in web development.
        <br />specializing in HTML,CSS and TYPESCRIPT.My experience extends
        <br /> to using frameworks like React and Next.js to create 
        <br />dynamic and user friendly applications.
        <br />I am also proficient in Tailwind CSS for efficient styling and design.
        <br />With a passion for learning I stay updated on the latest technologies
        <br /> to enhance my skill set and contribute effectively to projects</p>
 </div>
 <div>
    <ul className="text-lime-400  text-4xl p-20 font-extrabold" data-aos="flip-up"> 
        <ol>NEXT.JS</ol>
 <ol>TAILWIND CSS</ol>
 <ol>CSS</ol>
 <ol>HTML</ol>
 <ol>TYPESCRIPT</ol>
  </ul></div>
 </div>
    
    )
}