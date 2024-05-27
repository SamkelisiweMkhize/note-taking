import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NatesPageComponent } from './pages/nates-page/nates-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NatesPageComponent,
    NotesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
