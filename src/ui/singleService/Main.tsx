import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check, Copy } from "lucide-react";
import { Container } from "../sidenav/Container";
import AppLoader from "../AppLoader";
import { PageTransition } from "../transition/PageTransition";
import { generateRandomKey } from "@/utils/appUtil";
import { useGetDoc } from "@/features/appNav/NavHook";
import Response from "@/features/docroutes/Response";
import Header from "@/features/docroutes/Header";
import Request from "@/features/docroutes/Request";
import RequestSec from "@/features/docroutes/RequestSec";

function Main() {
  const [copyStatus, setCopyStatus] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<ResponseType | null>(
    null
  );

  const { id } = useParams<{ id: string }>();
  const { data, isError, error, gettingDoc, getDoc, isSuccess } = useGetDoc();

  useEffect(() => {
    if (id) {
      getDoc(id);
    }
  }, [id, getDoc]);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  console.log("data", data?.apiDocumentation?.request);

  if (gettingDoc) return <AppLoader />;
  if (error || isError) return <div>Error: {error.message}</div>;

  console.log("data2 :", data?.apiDocumentation?.body);
  return (
    <PageTransition>
      <Container>
        {isSuccess && (
          <div className="max-h-[90vh] overflow-scroll w-full overflow-x-hidden">
            <div className="grid md:grid-cols-6 grid-cols-1 gap-0 w-full">
              <div className="min-h-[90vh] flex-1 overflow-y-scroll col-span-4 px-2">
                <Header data={data.apiDocumentation?.titleHeading} />
                <div className="mt-10 md:ml-5 md:mx-20 flex">
                  <div className="p-2 flex flex-row bg-gray-100 rounded-md border-1 shadow-md dark:bg-gray-800 space-x-4 justify-between w-full">
                    <p className="px-3 py-2 text-xs font-semibold bg-black rounded-lg text-white">
                      {data.apiDocumentation?.request?.Method}
                    </p>
                    <div className="overflow-x-auto text-nowrap">
                      <p className="px-3 py-1 dark:text-white text-black text-[15px] md:text-[14px]">
                        {data.apiDocumentation?.request?.URL}
                      </p>
                    </div>

                    <CopyToClipboard
                      text={data.apiDocumentation?.request?.URL}
                      onCopy={onCopyText}
                    >
                      <div className="h-auto text-gray-800 dark:text-white cursor-pointer p-1">
                        {copyStatus ? (
                          <div className="flex items-center space-x-1">
                            <Check />
                          </div>
                        ) : (
                          <Copy />
                        )}
                      </div>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="px-5 my-10 ">
                  {data.apiDocumentation?.paragraphs?.map(
                    (paragraph: string, index: number) => (
                      <p
                        className="mt-5"
                        key={index + generateRandomKey() + paragraph}
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>

                <Request data={data?.apiDocumentation} />
              </div>

              <div className="px-2 border-l-2 sticky col-span-2 w-full max-h-[87vh] top-0">
                <RequestSec data={data?.apiDocumentation?.requestH} />

                <Response
                  data={data?.apiDocumentation}
                  selectedResponse={selectedResponse}
                  setSelectedResponse={setSelectedResponse}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </PageTransition>
  );
}

export default Main;
