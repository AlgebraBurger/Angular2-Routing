import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contacts/contact.component';

import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent
  ],
  providers: [
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
