import ProBox from "./ProBox";
import omnifood from "../../public/Projects-imgs/omnifood.png";

function Projects() {
  return (
    <section className=" bg-grayBackground py-24 md:py-36" id="projects">
      <div className="container mx-auto px-8 md:px-0">
        <div className="mx-auto flex max-w-4xl flex-col">
          <p className="mb-2.5 text-lg font-bold uppercase text-mainColor">
            portfolio
          </p>
          <h3 className="mb-16 text-2xl font-bold text-blackShade">
            Each project is a unique piece of development 🧩
          </h3>

          <div className="flex flex-col gap-12">
            <ProBox
              title="omnifood"
              img={omnifood}
              description="A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars."
              techno1="html"
              techno2="vanila css"
              code="#"
              demo="#"
            />

            <ProBox
              title="omnifood"
              img={omnifood}
              description="A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars."
              techno1="html"
              techno2="vanila css"
              code="#"
              demo="#"
              cName="reverse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
