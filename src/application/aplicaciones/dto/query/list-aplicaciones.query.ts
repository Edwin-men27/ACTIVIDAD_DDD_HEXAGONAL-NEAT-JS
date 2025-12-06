export class ListAplicacionesQuery {
  page = 1;
  pageSize = 10;
  searchTerm?: string;
  categoria?: string;
  proveedor?: string;
  licencia?: string;
  requiereConexionRed?: boolean;
  usaBaseDatos?: boolean;
}
