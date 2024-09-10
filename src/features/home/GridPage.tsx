/* eslint-disable @typescript-eslint/no-explicit-any */
import AppLoader from "@/ui/AppLoader";
import { useGetAllTitles } from "../appNav/NavHook";
import { generateRandomKey } from "@/utils/appUtil";

export function GridPage() {
  const { gettitles, gettingtitles, isError, isSuccess, notitles } =
    useGetAllTitles();

  if (gettingtitles) {
    return (
      <>
        <AppLoader />
      </>
    );
  }

  if (notitles) {
    return <>No Data Found</>;
  }

  if (isError) {
    return (
      <>
        <p>Error getting data</p>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-start m-10 ">
        {isSuccess && (
          <>
            {gettitles.titles?.map((data: any) => (
              <>
                <div
                  className="col-span-1 mt-20 items-center"
                  key={generateRandomKey() + data}
                >
                  <div>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      {data.title}
                    </h1>
                  </div>
                  <div className="border-b-4 px-[100px] md:px-[180px] lg:px-[200px] border-black dark:border-white mt-1"></div>
                  {data.sections?.map((section: any) => (
                    <div key={generateRandomKey() + section} className="mt-4">
                      <h2 className="text-lg my-2">{section.heading}</h2>
                      <p className="text-sm ">{section.sub_heading}</p>

                      {/* Loop through the questions within each section */}
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-blue-500">
                        {section.questions?.map((question: string) => (
                          <li
                            key={generateRandomKey() + question}
                            className="text-sm"
                          >
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}
