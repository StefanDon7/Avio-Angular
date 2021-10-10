import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'korisnik-home',
    loadChildren: () => import('./korisnik-home/korisnik-home.module').then( m => m.KorisnikHomePageModule)
  },
  {
    path: 'agent-home',
    loadChildren: () => import('./agent-home/agent-home.module').then( m => m.AgentHomePageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'korisnik-rezervacije',
    loadChildren: () => import('./korisnik-rezervacije/korisnik-rezervacije.module').then( m => m.KorisnikRezervacijePageModule)
  },
  {
    path: 'admin-registracija',
    loadChildren: () => import('./admin-registracija/admin-registracija.module').then( m => m.AdminRegistracijaPageModule)
  },
  {
    path: 'admin-agenti',
    loadChildren: () => import('./admin-agenti/admin-agenti.module').then( m => m.AdminAgentiPageModule)
  },
  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
