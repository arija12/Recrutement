import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './sign/sign.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { EntretienComponent } from './entretien/entretien.component';
import { ListStatusComponent } from './list-status/list-status.component';
import { DecisionComponent } from './decision/decision.component';
import { ListDecisionComponent } from './list-decision/list-decision.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';


const routes: Routes = [

  { path: "signIn", component: SignComponent },
  { path: "login", component: LoginComponent },
  { path: "listUsers", component: SubmissionsComponent /*,canActivate: [AuthGuard]*/ },
  { path: "navbar", component: NavbarComponent/*,canActivate: [AuthGuard]*/ },
  { path: "addUser", component: AddComponent/*,canActivate: [AuthGuard] */ },
  { path: "entretien", component: EntretienComponent/*,canActivate: [AuthGuard] */ },
  { path: "listStatus", component: ListStatusComponent/*,canActivate: [AuthGuard] */ },
  { path: "decisionEntretien", component: DecisionComponent/*,canActivate: [AuthGuard] */ },
  { path: "listDecision", component: ListDecisionComponent/*,canActivate: [AuthGuard] */ },
  { path: "dashbord", component: DashbordComponent/*,canActivate: [AuthGuard] */ },
  { path: "page", component: PageAcceuilComponent},
  { path: '', redirectTo: '/page', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }