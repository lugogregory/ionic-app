import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'add-place',
    loadChildren: () => import('./add-place/add-place.module').then( m => m.AddPlacePageModule)
  },
  // {
  //   path: 'place-detail',
  //   loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
