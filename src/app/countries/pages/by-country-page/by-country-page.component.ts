import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor( private countriesService:CountriesService ) { }

  searchByCountry(term:string):void{
    //console.log("desde la pagina de pais")
    this.countriesService.searchCountry(term).subscribe( countries => {
      console.log(countries);
      if(countries){
        this.countries = countries;
      }else{
        this.countries = [];
      }
    });
  }

}
