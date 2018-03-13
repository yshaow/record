import {Component,OnInit} from '@angular/core'
import {Hero} from './hero'
import {HeroService} from './hero.server'

@Component({
    selector:'dashboard',
    templateUrl:'./dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    heros: Hero[] = [];

    constructor(private heroService:HeroService){}

    ngOnInit():void{
        this.heroService.getHeroes()
        .then( heros => this.heros = heros.slice(1,5))
    }
}