/* eslint-disable @typescript-eslint/no-explicit-any */
import AppLoader from "@/ui/AppLoader";
import { useGetAllServices } from "../../appNav/NavHook";
import { generateRandomKey } from "@/utils/appUtil";
import { Trash2 } from "lucide-react";
import { useDeleteSer } from "@/features/addtltshom/titleHook";
import { useEffect } from "react";
import { FadeInUpTransition } from "@/ui/transition/PageTransition";

function ServicesEdit() {
  const {
    serviceData,
    noServices,
    gettingServices,
    serviceSuccesss,
    ServiceErrors,
    refetch,
  } = useGetAllServices();

  const { deleteSer, isSuccess: deleteSuccess } = useDeleteSer();

  useEffect(() => {
    if (deleteSuccess) {
      refetch();
    }
  }, [deleteSuccess, refetch]);

  if (gettingServices) {
    return (
      <>
        <AppLoader />
      </>
    );
  }

  if (ServiceErrors) {
    return <>"error getting Data"</>;
  }

  if (noServices) {
    return <>No data found</>;
  }

  const handleDeleteService = async (serviceId: string) => {
    try {
      await deleteSer({ _id: serviceId });
      refetch();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <>
      <FadeInUpTransition>
        <div className="list-disc mx-10 space-y-2 mt-10">
          {serviceSuccesss && (
            <>
              <div className="grid grid-cols-2 gap-5">
                {serviceData.services?.map((service: any) => (
                  <>
                    <div
                      key={service + generateRandomKey()}
                      className="border-2 border-black h-auto items-center p-2 py-4 text-black rounded-lg text-center "
                    >
                      <div className="flex justify-between items-center mx-10">
                        {service.serviceName}
                        <Trash2
                          className="cursor-pointer text-red-500"
                          onClick={() => {
                            handleDeleteService(service._id);
                          }}
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </FadeInUpTransition>
    </>
  );
}

export default ServicesEdit;
