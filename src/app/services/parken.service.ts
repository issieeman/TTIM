import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";


@Injectable()
export class ParkenService {

  private search: string;
  constructor(private _http: HttpClient) { }
  getLijst() : Observable<IparkenRoot>{
    return this._http.get<IparkenRoot>("http://datasets.antwerpen.be/v4/gis/parken.json")
    .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root})
  }
  getLijstByDistrict(district: string) : Observable<IparkenRoot>{
    return this._http.get<IparkenRoot>(`http://datasets.antwerpen.be/v4/gis/parken.json?district=${district}`)
    .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root})
  }
  getLijstByPostal(postcode: string) : Observable<IparkenRoot>{
    return this._http.get<IparkenRoot>(`http://datasets.antwerpen.be/v4/gis/parken.json?postcode=${postcode}`)
    .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root})
  }
  
}


export interface IPaging {
  records: number;
  pages: number;
  pageCurrent: number;
  pageNext?: any;
  pagePrev?: any;
  pageSize: number;
}

export interface IDatum {
  id: number;
  objectid: number;
  geometry: string;
  geometry2: Igeometry;
  straat: string;
  district: string;
  postcode: string;
  type: string;
  cluster: string;
  naam: string;
  gisid: string;
}

export interface IparkenRoot {
  paging: IPaging;
  data: IDatum[];
}



export interface Igeometry {
      type: string;
      coordinates: number[][][];
} 

