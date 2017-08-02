import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UsermanualComponent } from './usermanual/usermanual.component';
import { ContactsComponent } from './contacts/contacts.component';
import {CatalogService} from "./services/catalog.service";
import { OrderComponent } from './order/order.component';
import {RoutingModule} from "./routing/routing.module";

import {GalleriaModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    FeedbackformComponent,
    LandingpageComponent,
    UsermanualComponent,
    ContactsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    GalleriaModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
