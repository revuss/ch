/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/ui/sidenav/Container";
import { CPD_TITLE, SUBTITLE, WELCOME } from "@/utils/appConstants";
import { GridPage } from "./GridPage";
import { useGetAllServices } from "../appNav/NavHook";
import AppLoader from "@/ui/AppLoader";
import { PageTransition } from "@/ui/transition/PageTransition";
import { generateRandomKey } from "@/utils/appUtil";

function ServiceListItem({ serviceName }: { serviceName: string }) {
  return <li>{serviceName}</li>;
}

function HomePage() {
  const {
    serviceData,
    noServices,
    gettingServices,
    serviceSuccesss,
    ServiceErrors,
  } = useGetAllServices();

  if (gettingServices) {
    return (
      <>
        <AppLoader />
      </>
    );
  }

  if (ServiceErrors) {
    return <>"error Occuredd"</>;
  }

  if (noServices) {
    return <>No data found</>;
  }

  return (
    <>
      <PageTransition>
        <Container>
          <div>
            <h1 className="text-2xl  md:text-3xl font-bold">{CPD_TITLE}</h1>
          </div>
          <div className="my-8 ">
            <h1 className="font-semibold text-lg md:text-xl">{WELCOME}</h1>
            <p className="mt-2">{SUBTITLE}</p>
          </div>
          <ul className="list-disc mx-10 space-y-2">
            {serviceSuccesss && (
              <>
                {serviceData.services?.map((service: any) => (
                  <>
                    <ServiceListItem
                      key={service + generateRandomKey()}
                      serviceName={service.serviceName}
                    />
                  </>
                ))}
              </>
            )}
          </ul>
          <GridPage />
        </Container>
      </PageTransition>
    </>
  );
}

export default HomePage;
