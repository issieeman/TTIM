import { Component, OnInit } from '@angular/core';

import { IparkenRoot, ParkenService, Igeometry } from '../services/parken.service'


@Component({
  selector: 'app-picnic', 
  templateUrl: './picnic.component.html',
  styleUrls: ['./picnic.component.scss']
})
export class PicnicComponent implements OnInit {

  _search: string;
  parken : IparkenRoot;

  showTable: boolean;
  showSearchForm: boolean;
  showShow: boolean;

  tableTitle: string = "Parken filter";
  constructor(private _svc : ParkenService) { }

  ngOnInit() {
    this._svc.getLijst()
              .subscribe(result => this.parken = result);
    this.showTable = false;
    this.showSearchForm = true;
    this.showShow = true;
  }

  onNameKeyUp(event:any){
    console.log(event.target.value);
    this._search = event.target.value;
  }
  searchDistrict(){
    this._svc.getLijstByDistrict(this._search).subscribe(result => this.parken = result);
    this.showTable = true;
    this.showSearchForm = false;
    this.showShow = false;
  }
  searchPostal(){
    this._svc.getLijstByPostal(this._search).subscribe(result => this.parken = result);
    this.showTable = true;
    this.showSearchForm = false;
    this.showShow = false;
  }
  showAll(){
    this.showShow = false;
    this.showTable = true;
  }
  newSearch() {
    this.showTable = false;
    this.showSearchForm = true;
    this.showShow = true;
    console.log("new Search");
  }
}