import {Component} from '@angular/core'

@Component({
    selector:'app-root',
    template:`
        <h1>{{ title }}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heros">Heros</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent{
    title = 'Tour of Heros'
}