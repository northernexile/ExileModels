import { DateFormatter } from "../../services/date/DateFormatter"
import { DataTableColumnInterface } from "./data.table.column.interface"

export const VerifiedAt:DataTableColumnInterface = { 
    field: 'verifiedAt',
    headerName:'Verified',
    width:150,
    valueGetter: (value:string)=>{return DateFormatter.toDateTime(value)}
  }