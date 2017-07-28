import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LandingpageComponent} from "../landingpage/landingpage.component";
import {CatalogComponent} from "../catalog/catalog.component";
import {UsermanualComponent} from "../usermanual/usermanual.component";
import {FeedbackformComponent} from "../feedbackform/feedbackform.component";
import {OrderComponent} from "../order/order.component";
import {ContactsComponent} from "../contacts/contacts.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingpageComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'manual', component: UsermanualComponent },
  { path: 'feedback', component: FeedbackformComponent },
  { path: 'order', component: OrderComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
