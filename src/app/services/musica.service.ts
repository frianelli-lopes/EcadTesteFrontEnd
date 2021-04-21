import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { Observable } from "rxjs";
import { catchError, map, take } from "rxjs/operators";

import { Musica } from "../models/musica";

@Injectable()
export class MusicaService {
    
    constructor(private httpClient: HttpClient) {}

    protected urlService: string = "https://localhost:44361/api";

    obterMusicas(): Observable<Musica[]> {
        return this.httpClient
        .get<Musica[]>(`${this.urlService}/musica`);
    }
    
    obterPorId(id: string): Observable<Musica> {
        return this.httpClient
            .get<Musica>(`${this.urlService}/musica/${id}`);
    }

    novaMusica(musica: Musica) {
        return this.httpClient
            .post(`${this.urlService}/musica`, musica)
            .pipe(take(1));
    }

    atualizarMusica(musica: Musica) {
        return this.httpClient
            .put(`${this.urlService}/musica/${musica.id}`, musica)
            .pipe(take(1));
    }

    excluirMusica(id: string) {
        return this.httpClient
            .delete(`${this.urlService}/musica/${id}`)
            .pipe(take(1));
    }

}