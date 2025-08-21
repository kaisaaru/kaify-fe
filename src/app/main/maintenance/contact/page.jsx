import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import MasterLayout from "@/masterLayout/MasterLayout";
import QueryProvider from "@/components/QueryProvider";

export const metadata = {
  title: "Contact - Kaify",
  description:
    "Contact",
};

const Page = () => {
  return (
    <>
      <Breadcrumb 
        title='Contact' 
        main='Maintenance' 
        submain='Maintenance' 
        icon='heroicons:wrench-screwdriver' 
      />

      <QueryProvider>
        <Contact />
      </QueryProvider>
    </>
  );
};

export default Page;
