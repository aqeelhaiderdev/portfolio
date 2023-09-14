import { TbMapSearch, TbMail } from "react-icons/tb";

function Contact() {
  return (
    <section className="bg-backgroundColor py-20 md:py-28" id="contact">
      <div className="container mx-auto px-8 md:px-0">
        <div className="mx-auto flex max-w-4xl flex-col justify-center">
          <div className="text-center sm:text-left">
            <p className="mb-4 text-lg font-bold uppercase text-mainColor">
              contact
            </p>
            <h3 className="text-2xl font-bold text-blackShade">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="mt-8 flex flex-col gap-10 sm:mt-14 sm:flex-row sm:gap-20">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-backgroundColor text-2xl text-mainColor shadow-md">
                <TbMapSearch />
              </span>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-blackShade">Location</h3>
                <p className="text-lg text-textColor">Faisalabad, Pakistan</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-backgroundColor text-2xl text-mainColor shadow-md">
                <TbMail />
              </span>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-blackShade">Mail</h3>
                <a
                  href="mailto:aqeelhaiderdev@gmail.com"
                  className="text-lg text-textColor transition-all duration-200 hover:text-mainColor"
                >
                  aqeelhaiderdev@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
