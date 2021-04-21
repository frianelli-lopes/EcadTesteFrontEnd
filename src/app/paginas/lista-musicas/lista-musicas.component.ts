import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-lista-musicas',
  templateUrl: './lista-musicas.component.html',
  styles: [
  ]
})
export class ListaMusicasComponent implements OnInit {

  constructor(
    private musicaService: MusicaService,
    private router: Router
  ) { }

  public musicas: Musica[];

  ngOnInit() {
    this.listarMusicas();
  }

  listarMusicas() {
    this.musicaService.obterMusicas()
    .subscribe(
      musicas => {
        this.musicas = musicas;
      },
      error => console.log(error)
    );  
  }

  excluirMusica(id: string) {
    console.log('excluirMusica');
    console.log(id);

    this.musicaService.excluirMusica(id)
      .subscribe(
        sucesso => {
          this.listarMusicas();
        },
        falha => { console.log('Falha na atualização da música') }
      );
  }

}
