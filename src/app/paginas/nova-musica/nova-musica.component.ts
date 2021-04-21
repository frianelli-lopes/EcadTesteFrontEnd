import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { Musica } from 'src/app/models/musica';
import { GeneroService } from 'src/app/services/genero.service';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-nova-musica',
  templateUrl: './nova-musica.component.html'
})
export class NovaMusicaComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  musicaForm: FormGroup;
  musica: Musica = new Musica();
  generos: Genero[] = [];

  constructor(private fb: FormBuilder,
    private musicaService: MusicaService,
    private generoService: GeneroService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.musicaForm = this.fb.group({
      codigo: [''],
      nome: [''],
      idGenero: ['']
    });

    this.carregarGeneros();
  }

  carregarGeneros() {
    this.generoService.obterGeneros()
    .subscribe(
      generos => {
        this.generos = generos;
      },
      error => console.log(error)
    );    
  }

  adicionarMusica() {
    if (this.musicaForm.dirty && this.musicaForm.valid) {

      this.musica = Object.assign({}, this.musica, this.musicaForm.value);

      console.log(this.musica);

      this.musicaService.novaMusica(this.musica)
        .subscribe(
          sucesso => {
            this.musicaForm.reset();
          },
          falha => { console.log('Falha na inclusão da música') }
        );
    }
  }

}
