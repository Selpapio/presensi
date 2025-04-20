import BerandaAdmin from "../pages/admin/BerandaAdmin";
import TableFormulir from "./../pages/admin/TableFormulir";

export const navDataAdmin = [
  {
    label: "Beranda Admin",
    link: "/admin",
    element: <BerandaAdmin />,
  },
  {
    label: "Table Formulir",
    link: "/admin/tableformulir",
    element: <TableFormulir />,
  },
];
