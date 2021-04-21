import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { Observable } from "rxjs";
import { catchError, map, take } from "rxjs/operators";

import { Autor } from "../models/autor";

@Injectable()
export class AutorService {
    
    constructor(private httpClient: HttpClient) {}

    protected urlService: string = "https://localhost:44361/api";

    obterAutores(): Observable<Autor[]> {
        return this.httpClient
        .get<Autor[]>(this.urlService + '/autor');
    }
    
    novoAutor(autor: Autor) {
        return this.httpClient
            .post(this.urlService + "/autor", autor).pipe(take(1));
    }

}