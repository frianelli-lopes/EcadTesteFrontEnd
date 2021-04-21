import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-novo-autor',
  templateUrl: './novo-autor.component.html'
})
export class NovoAutorComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  autorForm: FormGroup;
  autor: Autor = new Autor();

  constructor(private fb: FormBuilder,
    private autorService: AutorService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.autorForm = this.fb.group({
      codigo: [''],
      nome: [''],
    });
  }

  adicionarAutor() {
    if (this.autorForm.dirty && this.autorForm.valid) {

      this.autor = Object.assign({}, this.autor, this.autorForm.value);

      this.autorService.novoAutor(this.autor)
        .subscribe(
          sucesso => { console.log('Incluiu autor') },
          falha => { console.log('Falha na inclusão do autor') }
        );
    }
  }
}
