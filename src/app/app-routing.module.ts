import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { LandingComponent } from '../landing/landing.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'game',
    component: GameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }