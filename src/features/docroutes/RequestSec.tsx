import CodeFormatter from "@/ui/singleService/CodeFormatter";

/* eslint-disable @typescript-eslint/no-explicit-any */
function RequestSec({ data }: any) {
  return (
    <>
      {data && (
        <>
          <div className="mt-10 mx-2">
            <div className="flex mx-2 justify-between items-center my-2">
              <h2 className="text-xl font-semibold font-primary capitalize">
                Request
              </h2>
            </div>
            <div className="mx-auto w-[100%] mt-10 text-xs">
              <CodeFormatter
                code={JSON.stringify(data, null, 2)}
                language="text"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default RequestSec;
