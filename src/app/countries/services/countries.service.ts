import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private url: string = 'https://restcountries.com/v3.1';


    constructor(private http: HttpClient) { }


    searchByAlphaCode( code: string ):Observable<Country | null> {
        return this.http.get<Country[]>(`${this.url}/alpha/${code}`)
                .pipe(
                    map( countries => countries.length > 0 ? countries[0] : null ),
                    catchError( err => of(null) )
                )
    }


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