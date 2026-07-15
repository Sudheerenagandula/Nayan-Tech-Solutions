import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';



export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
    },

  {
    path: '**',
    redirectTo: ''
  }

];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

