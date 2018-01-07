import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MultiLineString } from 'geojson';

@Injectable()
export class RestoService {

  private search: string;
  private _MultiLineStrings: MultiLineString[];

  constructor(private _http: HttpClient) { }
  getLijst() : Observable<IRootHoreca>{
    return this._http.get<IRootHoreca>("http://datasets.antwerpen.be/v4/gis/horecakernstraat.json")
    .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root})
  }
  getLijstByDistrict(district: string) : Observable<IRootHoreca>{
    return this._http.get<IRootHoreca>(`http://datasets.antwerpen.be/v4/gis/horecakernstraat.json?district=${district}`)
    .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root})
  }
  getLijstByPostal(postcode: string) : Observable<IRootHoreca>{
    return this._http.get<IRootHoreca>(`http://datasets.antwerpen.be/v4/gis/horecakernstraat.json?postcode=${postcode}`)
    .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root})
  }
}

export interface IDataHoreca{
  objectid: number;
  geometry: string;
  geometry2: IGeometryHoreca;
  shape?: any;
  id: string;
  thema: string;
  type: string;
  subtype: string;
  naam: string;
  straatnaam: string;
  postcode: string;
  district: string;
  laagste_niveau: string;
  hoogste_niveau: string;
  lengte?: number;
  shape_length: string;
}

export interface IGeometryHoreca {
  type: string;
  coordinates: number[];
}

export interface IBaseHoreca{
  shape?: any;
  id: string;
  thema: string;
  type: string;
  subtype: string;
  naam: string;
  straatnaam: string;
  postcode: string;
  district: string;
  laagste_niveau: string;
  hoogste_niveau: string;
  lengte: number;
  shape_length: string;
}

export interface IPagingHoreca {
  records: number;
  pages: number;
  pageCurrent: number;
  pageNext?: any;
  pagePrev?: any;
  pageSize: number;
}


export interface IRootHoreca {
  paging: IPagingHoreca;
  data: IDataHoreca[];
}

export interface Point {
  lon: number,
  lat: number
}
