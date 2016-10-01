import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillainEditComponent } from './villain-edit/villain-edit.component';
import { VillainListComponent } from './villain-list/villain-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainEditComponent,
    VillainListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
