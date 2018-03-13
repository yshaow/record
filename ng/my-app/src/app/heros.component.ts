import { Component ,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.server'

@Component({
  selector: 'heros',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor = "let hero of heros" (click)='onSelect(hero)' 
      [class.selected]="hero === selectedHero">
        <span class='badge'>{{ hero.id }}</span>
        {{hero.name}}
      </li>
    </ul>
    <hero-detail [selectedHero]="selectedHero"></hero-detail>
    `
})


export class HerosComponent implements OnInit{
  heros:Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService){}

  getHeroes():void {
     this.heroService.getHeroes().then( heros => this.heros = heros);
  }

  ngOnInit():void{
    this.getHeroes();
  }
}
