import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { PanelOfturismoComponent } from './components/panel-ofturismo/panel-ofturismo.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'login', component:LoginComponent},
  {path:'recuperar-password', component:RecuperarPasswordComponent},
  {path:'registrar-usuario', component:RegistrarUsuarioComponent},
  {path:'verificar-correo', component:VerificarCorreoComponent},
  {path:'panel-ofturismo', component:PanelOfturismoComponent},
  {path:'**', redirectTo:'login',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
