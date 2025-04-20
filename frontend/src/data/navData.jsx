import Beranda from "../pages/Beranda";
import Formulir from "../pages/Formulir";
import Status from "../pages/Status";
import Kontak from "../pages/Kontak";


export const navData = [
  { label: "Beranda", link: "/", element: <Beranda /> },
  {
    label: "Formulir Pengajuan",
    link: "/formulir_pengajuan",
    element: <Formulir />,
  },
  { label: "Status Pengajuan", link: "/status", element: <Status /> },
  { label: "Kontak", link: "/kontak", element: <Kontak /> },
];
