import { DateFormatter } from "../../services/date/DateFormatter"
import { DataTableColumnInterface } from "./data.table.column.interface"

export const CreatedAt:DataTableColumnInterface = { 
    field: 'createdAt',
    headerName:'Created',
    width:150,
    valueGetter: (value:string)=>{return DateFormatter.toDateTime(value)}
  }