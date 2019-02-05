import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})

export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'api/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  removeItem(i) {

    console.log(i);
    console.log(this.forecasts[i]);
    console.log(this.forecasts[i].dateFormatted);

    this.http.delete(this.baseUrl + 'api/WeatherForecasts/' + this.forecasts[i].dateFormatted)

      .subscribe(

        data => {

          console.log("Delete Request is successful ", data);

        },

        error => {

          console.log("Error", error);

        }

    );

    const identifer = this.forecasts.findIndex(e => e.dateFormatted === this.forecasts[i].dateFormatted) 
    if (i !== -1) {
      this.forecasts.splice(i, 1);
    }
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
