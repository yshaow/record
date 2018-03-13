import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component'
import {HerosComponent} from './heros.component'
import {DashboardComponent} from './dashboard.component'
import {HeroService} from './hero.server'


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HerosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//添加数据双向绑定模块
    RouterModule.forRoot([
      {
        path:'heros',
        component:HerosComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'detail/:id',
        component:HeroDetailComponent
      }
      ,{
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ]),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
