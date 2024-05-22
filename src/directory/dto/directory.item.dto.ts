interface DirectoryItemInterface {
    method: string;
    path: string;
    pattern:string
}
export class DirectoryItemDto<DirectoryItemInterface>  {
    method:string
    path:string
    pattern:string
}

export {DirectoryItemInterface}