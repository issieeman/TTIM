import { Component, OnInit } from '@angular/core';
import { WeatherService, IWeatherResult } from '../services/weather.service';
import * as mathjs from "mathjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  private _search: string = "Antwerpen";
  data: IWeather
  
  constructor(private _svc: WeatherService) { }

  ngOnInit() {
    this._svc.getCurrentWeatherAt(this._search)
      .subscribe(result => this.data = this.MapResult(result));
  }

  private MapResult(result: IWeatherResult): IWeather {
    return {
      location: result.name,
      icon: result.weather[0].icon,
      description: result.weather[0].description,
      temperature: +mathjs.unit(result.main.temp, "K").toNumber("degC").toFixed(1),
      sunrise: new Date(result.sys.sunrise * 1000),
      sunset: new Date(result.sys.sunset * 1000)
    };
  }

  get Search() {
    return this._search;
  }

  set Search(value: string) {
    this._search = value;
    this._svc.getCurrentWeatherAt(this._search).subscribe(result => this.data = this.MapResult(result));
  }
}

interface IWeather {
  location: string;
  description: string;
  icon: string;
  temperature: number;
  sunrise: Date;
  sunset: Date;
}
