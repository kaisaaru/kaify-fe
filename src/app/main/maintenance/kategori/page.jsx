import Breadcrumb from "@/components/Breadcrumb";
import KategoriBarang from "@/components/pages/maintenance/KategoriBarang";
import MasterLayout from "@/masterLayout/MasterLayout";
import QueryProvider from "@/components/QueryProvider"; // ⬅️ tambahkan

export const metadata = {
  title: "Kategori Barang - Kaify",
  description:
    "Kategori Barang",
};

const Page = () => {
  return (
    <>
      <Breadcrumb 
        title='Kategori Barang' 
        main='Maintenance' 
        submain='Maintenance' 
        icon='heroicons:wrench-screwdriver' 
      />

      {/* ⬇️ Bungkus KategoriBarang dengan provider */}
      <QueryProvider>
        <KategoriBarang />
      </QueryProvider>
    </>
  );
};

export default Page;
