import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';

function Celsius_to_Fahrenheit(temperatureC) {
    return (temperatureC * 9 / 5 + 32)
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  forecasts: Observable<WeatherForecast[]>;
  dateFormatted: string = "";
  temperatureC: number = 0;
  Summary: string = "";

  temperatureF = Celsius_to_Fahrenheit(this.temperatureC)


  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseURL: string) { }  

  addEntry() {
      this.httpClient.post(this.baseURL + 'api/WeatherForecasts',
        {
          "dateFormatted": this.dateFormatted,
          "temperatureC": this.temperatureC,
          "temperatureF": this.temperatureF,
          "summary": this.Summary
        }).subscribe(data => {console.log("POST Request is successful ", data);},
          error => { console.log("Error", error);
          }
        );
      }
    }


interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
