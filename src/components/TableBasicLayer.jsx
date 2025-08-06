import DefaultTable from "./molecule/table/DefaultTable";
import BorderedTables from "./molecule/table/BorderedTables";
import StripedRows from "./molecule/table/StripedRows";
import StripedRowsTwo from "./molecule/table/StripedRowsTwo";
import TablesBorderColors from "./molecule/table/TablesBorderColors";
import TablesBorderColorsTwo from "./molecule/table/TablesBorderColorsTwo";
import TablesBorderColorsThree from "./molecule/table/TablesBorderColorsThree";

const TableBasicLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultTable */}
      <DefaultTable />

      {/* BorderedTables */}
      <BorderedTables />

      {/* StripedRows */}
      <StripedRows />

      {/* StripedRowsTwo */}
      <StripedRowsTwo />

      {/* TablesBorderColors */}
      <TablesBorderColors />

      {/* TablesBorderColorsTwo */}
      <TablesBorderColorsTwo />

      {/* TablesBorderColorsThree */}
      <TablesBorderColorsThree />
    </div>
  );
};

export default TableBasicLayer;
