/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CodeFormatter from "./CodeFormatter";

function AccodionCon({ title, data }: any) {
  return (
    <>
      <AccordionItem value="item-1" className="mb-5">
        <AccordionTrigger className="text-2xl font-semibold">
          {title.toUpperCase()}
        </AccordionTrigger>
        <AccordionContent className="space-y-10 md:mx-10">
          <CodeFormatter code={data} language="javascript" />
        </AccordionContent>
      </AccordionItem>
    </>
  );
}

export default AccodionCon;
