export class UpdateAplicacionCommand {
  id!: string;
  proveedor?: string;
  categoria?: string;
  lenguajePrincipal?: string;
  lenguajeSecundario?: string | null;
  usaBaseDatos?: boolean;
  requiereConexionRed?: boolean;
  numBits?: number;
  sistemaOperativo?: string;
  requisitosHardware?: string | null;
  licencia?: string;
  precio?: number;
  descripcion?: string | null;
  web?: string | null;
  correo?: string;
  tamanoInstalador?: number;
}
