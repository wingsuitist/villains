import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { VillainEditComponent } from './villain-edit/villain-edit.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { PowersComponent } from './powers/powers.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainEditComponent,
    VillainListComponent,
    PowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
