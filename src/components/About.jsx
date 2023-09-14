import AboutImg from "../../public/about-img.jpg";
import RoundedText from "../../public/text2.svg";
import WorkingEmoji from "../../public/working-emoji.png";

function About() {
  return (
    <div className="bg-backgroundColor py-24 md:py-36" id="about">
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2">
          <div className="relative self-center justify-self-center">
            <img src={AboutImg} alt="mee" className="h-80 w-96 rounded-2xl" />
            <span className="absolute bottom-[-42px] right-[-42px] hidden h-48 w-48 rounded-full bg-backgroundColor sm:block">
              <img
                src={RoundedText}
                alt="text"
                className=" w-48 animate-spinSlow"
              />
              <img
                src={WorkingEmoji}
                alt="WorkingEmoji"
                className="absolute left-16 top-16 w-14"
              />
            </span>
          </div>
          <div className="max-w-lg self-center justify-self-center pt-12 text-center lg:justify-self-start lg:pt-0 lg:text-left">
            <h3 className="mb-4 text-lg font-bold uppercase text-mainColor">
              About me
            </h3>
            <h4 className="mb-6 text-2xl font-bold text-blackShade">
              A dedicated Front-end Developer
            </h4>
            <p className="text-md font-titleFont font-medium text-textColor sm:text-lg">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React and Tailwind. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
