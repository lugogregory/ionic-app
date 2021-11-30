import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../place-model';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  addPlace(title: HTMLInputElement, country: HTMLInputElement, imgUrl: HTMLInputElement){

    const newPlace: Place =  {
      name: title.value,
      country: country.value,
      img: imgUrl.value
    };

    this.placesService.addPlace(newPlace);
    this.router.navigate(['/places']);
  }

}
