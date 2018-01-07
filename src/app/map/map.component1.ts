import { Component, OnInit } from '@angular/core';
import { RestoService, IRootHoreca, IDataHoreca } from '../services/resto.service';
import { ParkenService, IparkenRoot, IDatum } from '../services/parken.service';

import { GeoJSON } from 'geojson-tools';
import { MultiLineString, Polygon } from 'geojson';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 
  _MultiLineStrings: MultiLineString[];
  _Polygons: Polygon[];

  pointCoords: number[] = [4.4019555435534  ,51.227873237218];   

  longitude:number = this.pointCoords[0];
  latitude:number = this.pointCoords[1];
  locationChosen: boolean = false;

  _parks: IparkenRoot;
  _horeca: IRootHoreca;

  constructor(private _horecaService: RestoService, private _parkService: ParkenService) { }

  ngOnInit() {
    console.log('hello');
    this._parkService.getLijst().subscribe(result => this._parks = result);
    this._horecaService.getLijst().subscribe(result => this._horeca = result);

    console.log(this._parks);
    console.log(this._horeca);
    let x = this._horeca.data.length;
    for (let i = 0; i < x; i++) {
      let y = x[i].geometry2.coordinates.length;
      for(let j = 0; j < y; j++) {
        //this._MultiLineStrings.push(this.requestGeoJSON(this._horeca.data[i].geometry2.coordinates[y]));
      }
    }
    console.log(this._MultiLineStrings.length);

    /*for (let i = 0; i < x; i++) {
      this._Polygons.push(this.requestGeoJSON(this._parks.data[0].geometry2.coordinates));
    }*/
  }

  onChooseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
  requestGeoJSON(obj: GeoJSON){
    return GeoJSON.parse(obj);
  }

}