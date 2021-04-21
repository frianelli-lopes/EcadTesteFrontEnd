import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { Observable } from "rxjs";
import { Genero } from "../models/genero";

@Injectable()
export class GeneroService {
    
    constructor(private httpClient: HttpClient) {}

    protected urlService: string = "https://localhost:44361/api";

    obterGeneros(): Observable<Genero[]> {
        return this.httpClient
        .get<Genero[]>(`${this.urlService}/genero`);
    }

}