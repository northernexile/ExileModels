
export interface DataTableColumnInterface {
    field:string
    headerName:string
    width:number
    valueGetter?:any | null
    renderCell?:any |null
}