import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Genero } from 'src/app/models/genero';
import { Musica } from 'src/app/models/musica';
import { GeneroService } from 'src/app/services/genero.service';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-editar-musica',
  templateUrl: './editar-musica.component.html'
})
export class EditarMusicaComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  musicaForm: FormGroup;
  musica: Musica = new Musica();
  generos: Genero[] = [];

  constructor(private fb: FormBuilder,
    private musicaService: MusicaService,
    private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap((id: string) => {
          if (!id) return of(null);
          return this.musicaService.obterPorId(id);
        }) 
      )
      .subscribe(musica => {
        if (musica) this.updateForm(musica);
      });

    this.musicaForm = this.fb.group({
      id: [this.musica.id],
      codigo: [this.musica.codigo],
      nome: [this.musica.nome],
      idGenero: [this.musica.idGenero]
    });

    this.carregarGeneros();
  }

  updateForm(musica: Musica) {
    this.musicaForm.patchValue({ ...musica });
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

  editarMusica() {
    if (this.musicaForm.dirty && this.musicaForm.valid) {

      this.musica = Object.assign({}, this.musica, this.musicaForm.value);

      this.musicaService.atualizarMusica(this.musica)
        .subscribe(
          sucesso => {
            this.router.navigate(['/lista-musica']);
          },
          falha => { console.log('Falha na atualiza????o da m??sica') }
        );
    }
  }

}
