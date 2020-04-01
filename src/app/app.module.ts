import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { RandomComponent } from './random/random.component';
import { ColorComponent } from './color/color.component';
import { LibrosComponent } from './libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    RandomComponent,
    ColorComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
