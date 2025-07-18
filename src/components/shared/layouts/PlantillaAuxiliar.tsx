import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import React from "react";
import Header from "./Header";
import { RolesSistema } from "@/interfaces/shared/RolesSistema";
import NavBarFooter from "./NavBarFooter";

const PlantillaAuxiliar = ({
  children,
  Nombres,
  Apellidos,
  Google_Drive_Foto_ID,
  Genero,
}: {
  children: React.ReactNode;
  Nombres: RequestCookie;
  Apellidos: RequestCookie;
  Genero: RequestCookie;
  Google_Drive_Foto_ID: string | null;
}) => {
  return (
    <main className="  w-full grid grid-rows-[min-content_1fr_min-content] min-h-[100dvh]">
      <Header
        Genero={Genero}
        Google_Drive_Foto_ID={Google_Drive_Foto_ID}
        Nombres={Nombres}
        Apellidos={Apellidos}
        Rol={RolesSistema.Auxiliar}
      />
      <main className=" py-4 px-4 min-h-full min-w-full flex justify-center items-center">
        {children}
      </main>

      <NavBarFooter Rol={RolesSistema.Auxiliar} />
    </main>
  );
};
export default PlantillaAuxiliar;
