import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html'
})
export class ListaAutoresComponent implements OnInit {

  constructor(private autorService: AutorService) { }

  public autores: Autor[];

  ngOnInit() {
    this.autorService.obterAutores()
    .subscribe(
      autores => {
        this.autores = autores;
      },
      error => console.log(error)
    );
  }
}
