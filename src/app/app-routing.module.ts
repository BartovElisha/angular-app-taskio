import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectPageComponent },  
  { path: 'about', component: AboutPageComponent },
  { path: 'tasks', component: TaskPageComponent }, 
  { path: 'signup', component: SignupComponent },  
  { path: 'signin', component: SigninComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
