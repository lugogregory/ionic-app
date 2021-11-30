import { Injectable } from '@angular/core';
import { Place } from './place-model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: Place[] = [
    {
    id: '1',
    name: 'Guggenheim',
    country: 'Bilbo',
    img: 'https://cms.guggenheim-bilbao.eus/uploads/2019/03/Torre-2-b-1024x755.jpg',
    comments: ['Awesome', 'Beatifull'],
  },
  {
    id: '2',
    name: 'Salto Angel',
    country: 'Venezuela',
    img: 'http://www.latam-energy.com/wp-content/uploads/2017/03/salto-del-angel.jpg',
    comments: ['Awesome', 'Beatifull'],
  },
  {
    id: '3',
    name: 'Mochima',
    country: 'Venezuela',
    img: 'https://turismosucre.com.ve/images/estadosucre/estadosucre_500x540.jpg',
    comments: [],
  }
];

  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(placeId: string){
    return this.places.find(place => place.id === placeId);
  }

  addPlace(place: Place){
    place.id = this.places.length + 1 + ''; // Al sumarle comillas automáticamente lo convierte en un string
    this.places.push(place);
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => place.id !== placeId);
  }

}
