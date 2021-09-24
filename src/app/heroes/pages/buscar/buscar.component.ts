import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];

  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    this.heroesServices.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
