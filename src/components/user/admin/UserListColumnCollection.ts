import { Email } from "../../../models/data/email";
import { ColumnCollectionInterface } from "../../../models/data/column.collection.interface";
import { CreatedAt } from "../../../models/data/created.at";
import { Identity } from "../../../models/data/identity";
import { UpdatedAt } from "../../../models/data/updated.at";
import { Username } from "../../../models/data/username";
import { VerifiedAt } from "../../../models/data/verified.at";
import { EditAction } from "../../../models/data/edit.action";
import { DeleteAction } from "../../../models/data/delete.action";

export const UserListColumnCollection:ColumnCollectionInterface = {
    columns:[
        Identity,
        Username,
        Email,
        CreatedAt,
        UpdatedAt,
        VerifiedAt,
        EditAction,
        DeleteAction
    ]
}