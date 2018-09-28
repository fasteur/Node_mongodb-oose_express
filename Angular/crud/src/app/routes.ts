import { Routes } from "@angular/router";
import { UserListComponent } from "./pages/user-list/user-list.component";
import { UserCreateComponent } from "./pages/user-create/user-create.component"
export const routes: Routes = [ 
    {
        path:'users',
        component:UserListComponent 
    },
    {
        path:'users/add',
        component:UserCreateComponent 
    },
    {
        path:'',
        redirectTo:'/users',
        pathMatch:"full"
    }
]