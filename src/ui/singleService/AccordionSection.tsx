import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { generateRandomKey } from "@/utils/appUtil";

type AccordionSectionProps<T> = {
  title: string;
  data: Record<string, T>;
  getId: (item: T) => string;
  getType: (item: T) => string;
  isRequired: (item: T) => boolean;
  getDefinition: (item: T) => string;
  getValue: (item: T) => string;
};

function AccordionSection<T>({
  title,
  data,
  getId,
  getType,
  isRequired,
  getDefinition,
  getValue,
}: AccordionSectionProps<T>) {
  return (
    <>
      {/* <AccordionItem value={`item-${title}`} className="mb-5"> */}
      <AccordionItem value="item-1" className="mb-5">
        <AccordionTrigger className="text-2xl font-semibold">
          {title.toUpperCase()}
        </AccordionTrigger>
        <AccordionContent className="space-y-10">
          {Object.entries(data).map(([key, item]) => (
            <div key={getId(item) + key + generateRandomKey()}>
              <div className="flex justify-between items-center my-3">
                <div className="flex flex-row space-x-4 align-middle">
                  <p className="font-bold text-sm">{key}</p>
                  <span className="text-sm">{getType(item)}</span>
                </div>
                <Badge variant={"outline"} className="text-green-500">
                  {isRequired(item) ? "Required" : "Optional"}
                </Badge>
              </div>
              <Label className="text-sm">{getDefinition(item)}</Label>
              <div className="flex flex-row items-center space-x-4 text-xs mt-4">
                <Badge>Value</Badge>
                <Label>{getValue(item)}</Label>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </>
  );
}

export default AccordionSection;
