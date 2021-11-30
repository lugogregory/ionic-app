import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children: [
      {
        path: '',
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./places/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      }
    ]
  },
  {
    path:'add-place',
    loadChildren: () => import('./places/add-place/add-place.module').then(m => m.AddPlacePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
