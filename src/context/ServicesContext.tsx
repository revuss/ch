// import { useGetAllHeaders } from "@/features/appNav/NavHook";
// import { createContext, useContext } from "react";

// /* eslint-disable @typescript-eslint/no-explicit-any */

// interface ServiceContextType {
//   headersData: any;
//   gettingData: boolean;
//   error: any;
//   isSuccess: boolean;
// }

// const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

// export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const { headersData, error, gettingData, isSuccess } = useGetAllHeaders();

//   const value = { getServices, gettingServices, error, isSuccess };

//   return (
//     <MenusContext.Provider value={value}>{children}</MenusContext.Provider>
//   );
// };

// export const useMenus = () => {
//   const context = useContext(MenusContext);
//   if (context === undefined) {
//     throw new Error("useMenus must be used within a MenusProvider");
//   }
//   return context;
// };
