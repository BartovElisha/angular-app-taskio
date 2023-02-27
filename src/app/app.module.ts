import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProjectCardComponent,
    SectionTitleComponent,
    FooterComponent,
    ProjectPageComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
