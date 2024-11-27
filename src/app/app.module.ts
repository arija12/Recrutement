import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SignComponent } from './sign/sign.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AddComponent } from './add/add.component';
import { EntretienComponent } from './entretien/entretien.component';
import { ListStatusComponent } from './list-status/list-status.component';
import { DecisionComponent } from './decision/decision.component';
import { ListDecisionComponent } from './list-decision/list-decision.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignComponent,
    SubmissionsComponent,
     AddComponent,
     EntretienComponent,
     ListStatusComponent,
     DecisionComponent,
     ListDecisionComponent,
     DashbordComponent,
     PageAcceuilComponent
     
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      
     
      RouterModule.forRoot([

        {path:'sign',component:SignComponent},
        {path:'',redirectTo:'sign',pathMatch:'full'},

        {path:'login',component:LoginComponent},
        {path:'',redirectTo:'login',pathMatch:'full'},

        

      ]),
      
     

      
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
