import { FadeInUpTransition } from "@/ui/transition/PageTransition";
import ServiceForm from "./ServiceForm";

function ServicesMain() {
  return (
    <>
      <FadeInUpTransition>
        <div className="flex justify-center flex-col items-center mt-5">
          <h1 className="text-2xl font-semibold p-2"> Add a New Service</h1>
          <span className="text-sm text-center md:mx-20">
            Fill in the field below with the name and details of the new service
            you'd like to add. Click the button to send your service information
            to us. Our team will review and make it available on our homepage.
          </span>
        </div>
        <div className="md:w-[40%] mx-auto flex justify-center items-center">
          <ServiceForm />
        </div>
      </FadeInUpTransition>
    </>
  );
}

export default ServicesMain;
