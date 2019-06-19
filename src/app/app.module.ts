import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpecificpageComponent } from './pages/specificpage/specificpage.component';
import { GrasstypepageComponent } from './pages/grasstypepage/grasstypepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpecificpageComponent,
    GrasstypepageComponent,
    ContactpageComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
