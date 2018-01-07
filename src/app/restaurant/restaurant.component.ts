import { Component, OnInit } from '@angular/core';
import { IRootHoreca, RestoService, IDataHoreca, IGeometryHoreca } from '../services/resto.service';
import { MultiLineString } from 'geojson';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  _search: string;
  horecaBuurten: IRootHoreca;
  _MultiLineStrings: MultiLineString[];
  
  yelpUrl: string = "https://api.yelp.com/v3/businesses/";
  private yelpClientID: string = "J4HCpFIgefGKFDm6C2v_oQ";
  private yelpApiKey: string = "QZyMsQWdQaEHFEd4KaV8pjtjVcAm7WSGucUvxXgw8WTEbyEvS7rgsGLZYnAH0qjLIydMfqq23sdEer0pHJPq90D9HqSghBd_MrRL51Z2jjxpI2BbJO__tD8dV5ZLWnYx";
  private yelpSecret: string = "jbduNmWd2UD8hs8fKvUXXcOuM8TnEbpxAiCtnKgVIs1KKrdtlany22YgRrbBshXT";

  showTable: boolean;
  showSearchForm: boolean;
  showShow: boolean;

  tableTitle: string = "Horecabuurten filter";
  
  constructor(private _service: RestoService) { }

  ngOnInit() {
    this._service.getLijst().subscribe(result => this.horecaBuurten = result);
    this.showTable = false;
    this.showSearchForm = true;
    this.showShow = true;
  }

  onNameKeyUp(event:any){
    this._search = event.target.value;
  }
  
  showAll() {
    this.showShow = false;
    this.showTable = true;
  }

  newSearch() {
    this.showTable = false;
    this.showSearchForm = true;
    this.showShow = true;
  }

  searchDistrict(){
    this._service.getLijstByDistrict(this._search).subscribe(result => this.horecaBuurten = result);
    this.showTable = true;
    this.showSearchForm = false;
    this.showShow = false;
  }

  searchPostal(){
    this._service.getLijstByPostal(this._search).subscribe(result => this.horecaBuurten = result);
    this.showTable = true;
    this.showSearchForm = false;
    this.showShow = false;
  }
  zegShit(obj){
    console.log(obj);

  }
}
