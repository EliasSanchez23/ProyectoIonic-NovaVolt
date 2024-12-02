import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'crear-venta',
    loadChildren: () => import('./crear-venta/crear-venta.module').then(m => m.CrearVentaPageModule)
  },
  {
    path: 'lista-articulos',
    loadChildren: () => import('./lista-articulos/lista-articulos.module').then(m => m.ListaArticulosPageModule)
  },
  {
    path: 'editar-articulo/:id', // Especificando el parámetro id
    loadChildren: () => import('./editar-articulo/editar-articulo.module').then(m => m.EditarArticuloPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then(m => m.TiendaPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./sobre-nosotros/sobre-nosotros.module').then(m => m.SobreNosotrosPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule)
  }
  // Otras rutas...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
