/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion } from "@/components/ui/accordion";
import { DocumentationItem } from "@/types/typeData";
import AccodionCon from "@/ui/singleService/AccodionCon";
import AccordionSection from "@/ui/singleService/AccordionSection";

function Request({ data }: any) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-5 px-2">
        {data?.headers && (
          <AccordionSection
            title="Headers"
            data={data?.headers}
            getId={(item: DocumentationItem) => item._id}
            getType={(item) => item.type}
            isRequired={(item) => item.required}
            getDefinition={(item) => item.definition}
            getValue={(item) => item.value}
          />
        )}
        {data?.params && (
          <AccordionSection
            title="Params"
            data={data?.params}
            getId={(item: DocumentationItem) => item._id}
            getType={(item) => item.type}
            isRequired={(item) => item.required}
            getDefinition={(item) => item.definition}
            getValue={(item) => item.value}
          />
        )}

        {data?.body && (
          <>
            <AccodionCon
              title="Body"
              data={JSON.stringify(data?.body, null, 2)}
            />
          </>
        )}
      </Accordion>
    </>
  );
}

export default Request;
