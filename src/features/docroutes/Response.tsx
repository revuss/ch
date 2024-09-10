/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Respons } from "@/types/typeData";
import CodeFormatter from "@/ui/singleService/CodeFormatter";
import { Select } from "@radix-ui/react-select";

function Response({ data, selectedResponse, setSelectedResponse }: any) {
  const jsonCode = selectedResponse
    ? JSON.stringify(selectedResponse, null, 2)
    : "Select a status code to see the response";

  return (
    <>
      <div className="mt-10 mx-2">
        <div className="flex mx-2 justify-between items-center my-2">
          <h2 className="text-xl font-semibold font-primary capitalize">
            Response
          </h2>
          <div>
            <Select
              onValueChange={(value) => {
                const response = data?.response[value];
                setSelectedResponse(response || null);
              }}
            >
              <SelectTrigger className="w-[100px] border-0 font-semibold text-gray-500">
                <SelectValue placeholder="status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-xs text-center items-center">
                  {Object.entries(data?.response || {}).map(
                    ([key, response]) => {
                      const responseObj = response as Respons;
                      return (
                        <SelectItem key={responseObj._id} value={key}>
                          {responseObj.status}
                        </SelectItem>
                      );
                    }
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mx-auto w-[100%] mt-10 text-xs">
          <CodeFormatter code={jsonCode} language="javascript" />
        </div>
      </div>
    </>
  );
}

export default Response;
