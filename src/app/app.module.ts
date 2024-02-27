import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { GameModule } from '../game/game.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    GameModule,
    AppRoutingModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
