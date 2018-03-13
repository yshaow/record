import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router'
import {Location} from '@angular/common'
import {HeroService} from './hero.server'
import 'rxjs/add/operator/switchMap';
import {Hero} from './hero'

@Component({
    selector:'hero-detail',
    template:`
    <div *ngIf='selectedHero'>
    <h2>{{ selectedHero.name }} detail!</h2>
    <div><label>id:</label> {{selectedHero.id}}</div>
    <div><label>name:</label> {{selectedHero.name}}</div>
    <div>
      <label>name:</label>
      <input [(ngModel)] = 'selectedHero.name' placeholder='name'/>
    </div>
    <button (click)="goBack()">Back</button>
    </div>
    `
})

export class HeroDetailComponent implements OnInit {
    @Input() selectedHero:Hero;

    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location: Location
    ){}

    ngOnInit():void{
        this.route.paramMap.switchMap(
            (params:ParamMap) => this.heroService.getHero(+params.get('id'))).subscribe( hero => this.selectedHero = hero)
    }

    goBack():void {
        this.location.back();
    }
}