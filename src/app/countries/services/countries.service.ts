import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private url: string = 'https://restcountries.com/v3.1';


    constructor(private http: HttpClient) { }


    searchCapital(capital: string):Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}/capital/${capital}`)
            .pipe(
                catchError( err => of([]) )
            )
    }


    searchCountry(country: string): Observable<Country[] | null> {
        return this.http.get<Country[]>(`${this.url}/name/${country}`)
            .pipe(
                catchError( err => of(null) )
            )
    }

    searchRegion(region: string):Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}/region/${region}`)
            .pipe(
                catchError( err => of([]) )
            )
    }
    
}