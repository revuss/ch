import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/ui/sidenav/Container";
import { PageTransition } from "@/ui/transition/PageTransition";
import ServicesEdit from "./serviceList/ServiceEdit";

function EditMain() {
  return (
    <>
      <PageTransition>
        <Container>
          <Tabs defaultValue="service" className="w-full  rounded-lg">
            <TabsList className="grid w-full lg:grid-cols-3 grid-cols-1 h-auto border-2 p-3 border-black rounded-lg">
              <TabsTrigger value="apiDocs" className="p-2">
                API Details
              </TabsTrigger>
              <TabsTrigger value="service" className="p-2">
                Service Details
              </TabsTrigger>
              <TabsTrigger value="title" className="p-2">
                Title Details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="apiDocs">1</TabsContent>
            <TabsContent value="service">
              <ServicesEdit />
            </TabsContent>
            <TabsContent value="title">3 </TabsContent>
          </Tabs>
        </Container>
      </PageTransition>
    </>
  );
}

export default EditMain;
