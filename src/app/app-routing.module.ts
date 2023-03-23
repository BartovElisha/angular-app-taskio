import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './core/auth.service';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  {
    path: '',
    canActivateChild: [AuthService],
    children: [
        { path: 'projects', component: ProjectPageComponent },
        { path: 'tasks', component: TaskPageComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
