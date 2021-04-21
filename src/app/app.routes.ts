import { Routes } from '@angular/router' ;
import { HomeComponent } from './navegacao/home/home.component';
import { EditarMusicaComponent } from './paginas/editar-musica/editar-musica.component';
import { ListaAutoresComponent } from './paginas/lista-autores/lista-autores.component';
import { ListaMusicasComponent } from './paginas/lista-musicas/lista-musicas.component';
import { NovaMusicaComponent } from './paginas/nova-musica/nova-musica.component';
import { NovoAutorComponent } from './paginas/novo-autor/novo-autor.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

export const rootRouterConfig : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'lista-autor', component: ListaAutoresComponent},
    {path: 'novo-autor', component: NovoAutorComponent},
    {path: 'lista-musica', component: ListaMusicasComponent},
    {path: 'nova-musica', component: NovaMusicaComponent},
    {path: 'editar-musica/:id', component: EditarMusicaComponent},
    {path: 'sobre', component: SobreComponent}
]