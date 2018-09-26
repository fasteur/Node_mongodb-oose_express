import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ProductsComponent } from "../products/products.component";
import { ProtectedComponent } from "../protected/protected.component";
import { LoggedInGuard } from "../logged-in.guard";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductsComponent},
  {path:'login', component: LoginComponent},
  {path:'protected', canActivate: [LoggedInGuard], component: ProtectedComponent},
]
export default routes