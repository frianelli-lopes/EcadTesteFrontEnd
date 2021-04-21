import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { rootRouterConfig } from './app.routes';
import { ListaAutoresComponent } from './paginas/lista-autores/lista-autores.component';
import { AutorService } from './services/autor.service';
import { NovoAutorComponent } from './paginas/novo-autor/novo-autor.component';
import { ListaMusicasComponent } from './paginas/lista-musicas/lista-musicas.component';
import { NovaMusicaComponent } from './paginas/nova-musica/nova-musica.component';
import { MusicaService } from './services/musica.service';
import { EditarMusicaComponent } from './paginas/editar-musica/editar-musica.component';
import { GeneroService } from './services/genero.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ListaAutoresComponent,
    NovoAutorComponent,
    ListaMusicasComponent,
    NovaMusicaComponent,
    EditarMusicaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    AutorService,
    MusicaService,
    GeneroService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
