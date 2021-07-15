import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { UserService } from './providers/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [HomeComponent, AssessmentComponent, UserInfoComponent, UserListComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ UserService ]
})
export class FeatureModule { }
