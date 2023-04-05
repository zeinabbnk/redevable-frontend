import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedevableCreateComponent } from './view/redevables/redevable-create/redevable-create.component';
import { RedevableListComponent } from './view/redevables/redevable-list/redevable-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    RedevableCreateComponent,
    RedevableListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
