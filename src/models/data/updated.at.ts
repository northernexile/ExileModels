import { DateFormatter } from "../../services/date/DateFormatter"
import { DataTableColumnInterface } from "./data.table.column.interface"

export const UpdatedAt:DataTableColumnInterface = { 
    field: 'updatedAt',
    headerName:'Updated',
    width:150,
    valueGetter: (value:string)=>{return DateFormatter.toDateTime(value)}
  }