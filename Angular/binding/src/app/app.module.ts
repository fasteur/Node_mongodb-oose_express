import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormatsComponent } from './formats/formats.component';
import { SummaryPipe } from './summary.pipe';
import { TitrePipe } from './titre.pipe';
import { ExomajusculeComponent } from './exomajuscule/exomajuscule.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FormatsComponent,
    SummaryPipe,
    TitrePipe,
    ExomajusculeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
