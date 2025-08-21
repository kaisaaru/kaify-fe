import Breadcrumb from "@/components/Breadcrumb";
import Relasi from "@/components/pages/maintenance/Relasi";
import MasterLayout from "@/masterLayout/MasterLayout";
import QueryProvider from "@/components/QueryProvider"; // ⬅️ tambahkan

export const metadata = {
  title: "Relasi - Kaify",
  description:
    "Relasi",
};

const Page = () => {
  return (
    <>
      <Breadcrumb 
        title='Relasi' 
        main='Maintenance' 
        submain='Maintenance' 
        icon='heroicons:wrench-screwdriver' 
      />

      {/* ⬇️ Bungkus Relasi dengan provider */}
      <QueryProvider>
        <Relasi />
      </QueryProvider>
    </>
  );
};

export default Page;
