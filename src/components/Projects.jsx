import ProBox from "./ProBox";
import omnifood from "../../public/Projects-imgs/omnifood.png";
import minimalMall from "../../public/Projects-imgs/minimal-mall.png";

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
              title="MINIMAL MALL ECOMMERCE"
              img={minimalMall}
              description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
              techno1="React"
              techno2="Tailwind CSS"
              code="https://github.com/aqeelhaiderdev/minimal-mall"
              demo="https://minimal-mall.vercel.app/"
              cName="reverse"
            />

            <ProBox
              title="omnifood"
              img={omnifood}
              description="Omnifood is a fictional company website focused on providing AI-based meals through a subscription service."
              techno1="html"
              techno2="vanila css"
              code="https://github.com/aqeelhaiderdev/omnifood"
              demo="https://omnifood-aqeel.netlify.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
