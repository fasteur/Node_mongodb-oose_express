import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavorisComponent } from './favoris/favoris.component';
import { PanelComponent } from './panel/panel.component';
import { ExocoeurComponent } from './exocoeur/exocoeur.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavorisComponent,
    PanelComponent,
    ExocoeurComponent,
    DirectivesComponent,
    InputFormatDirective,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
