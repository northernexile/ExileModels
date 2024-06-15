import { Email } from "../../../models/data/email";
import { ColumnCollectionInterface } from "../../../models/data/column.collection.interface";
import { CreatedAt } from "../../../models/data/created.at";
import { Identity } from "../../../models/data/identity";
import { UpdatedAt } from "../../../models/data/updated.at";
import { Username } from "../../../models/data/username";
import { UserEditAction } from "./user.edit.action";
import { VerifiedAt } from "../../../models/data/verified.at";
import { UserDeleteAction } from "./user.delete.action";

export const UserListColumnCollection:ColumnCollectionInterface = {
    columns:[
        Identity,
        Username,
        Email,
        CreatedAt,
        UpdatedAt,
        VerifiedAt,
        UserEditAction,
        UserDeleteAction
    ]
}