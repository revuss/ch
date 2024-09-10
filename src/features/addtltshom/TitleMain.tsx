import { FadeInUpTransition } from "@/ui/transition/PageTransition";
import FormTitle from "./FormTitle";

function TitleMain() {
  return (
    <>
      <FadeInUpTransition>
        <div className="flex justify-center flex-col items-center mt-5">
          <h1 className="text-2xl font-semibold p-2"> Add a New Title</h1>
          <span className="text-sm text-center md:mx-20">
            Fill in the field below with the name and details of the new title
            you'd like to add. Click the button to send your information to us.
          </span>
        </div>
        <div className="md:w-[60%] mx-auto flex justify-center items-center">
          <FormTitle />
        </div>
      </FadeInUpTransition>
    </>
  );
}

export default TitleMain;
