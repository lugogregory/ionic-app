import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from '../place-model';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  placeToShow: Place;
  placeIdUrl;

  constructor(
    private activatedRouter: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((params) => {
      this.placeIdUrl = params.get('placeId');

      if(this.placeIdUrl){
        this.placeToShow = this.placesService.getPlace(this.placeIdUrl);
      }
    });
  }

  async deletePlace(){

    const alrtCtrl = await this.alertController.create({
      header: 'Are you sure delete this item?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.placeToShow.id);
            this.router.navigate(['/places']);
          }
        },
    ]
    });

    await alrtCtrl.present();
  }
}
