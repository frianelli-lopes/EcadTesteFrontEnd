import { Routes } from '@angular/router' ;
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

export const rootRouterConfig : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent}
]