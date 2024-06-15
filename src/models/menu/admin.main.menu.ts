import { MenuItemCollectionInterface } from "./menu.item.collection.interface";

const AdminMainMenu:MenuItemCollectionInterface = {
    items:[
        {title:'Dashboard',path:'/admin'},
        {title:'Users',path:'/admin/users'},
        {title:'Roles',path:'/admin/roles'},
        {title:'Scales',path:'admin/scales'},
        {title:'Roles',path:'/admin/roles'},
        {title:'Models',path:'/admin/models'},
        {title:'Blog',path:'/admin/blog'},
        {title:'Contact',path:'/admin/contact'},
        {title:'Orders',path:'/admin/orders'}
    ]
}

export default AdminMainMenu;