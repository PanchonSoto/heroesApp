import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  heroeSelect: Heroe | undefined;

  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    this.heroesServices.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSelect = undefined;
      return;
    }

    const heroe:Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesServices.getHeroeId(heroe.id!)
      .subscribe(heroe => this.heroeSelect = heroe);
  }
}
