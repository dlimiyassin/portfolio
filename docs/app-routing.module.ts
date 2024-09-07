import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../src/app/Content/home/home.component';
import { ContactComponent } from '../src/app/Content/contact/contact.component';
import { AboutComponent } from '../src/app/Content/about/about.component';
import { ProjectsComponent } from '../src/app/Content/projects/projects.component';
import { ResumeComponent } from '../src/app/Content/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
