import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './Content/home/home.component';
import { ContactComponent } from './Content/contact/contact.component';
import { AboutComponent } from './Content/about/about.component';
import { ResumeComponent } from './Content/resume/resume.component';
import { ProjectsComponent } from './Content/projects/projects.component';
import { MinibarComponent } from './minibar/minibar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    MinibarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
