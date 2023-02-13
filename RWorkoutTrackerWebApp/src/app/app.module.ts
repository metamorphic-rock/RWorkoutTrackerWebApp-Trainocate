import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackerComponent } from './Sections/Tracker/tracker.component';
import { HeaderComponent } from './Sections/Header/header.component';
import { ExerciseFormComponent } from './Sections/Tracker/InputForm/ExerciseForm/exercise-form.component';
import { SetFormComponent } from './Sections/Tracker/InputForm/SetForm/set-form.component';
import { OutputHeaderComponent } from './Sections/Tracker/OutputHeader/output-header.component';
import { OutputBodyComponent } from './Sections/Tracker/OutputBody/output-body.component';


const appRoutes: Routes=[
  {path:'tracker',component:TrackerComponent},
  {path:'exerciseForm', component: ExerciseFormComponent},
  
  {path:'setForm', component:SetFormComponent},
  { path: '**', redirectTo: '/tracker'}
]
@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    HeaderComponent,
    ExerciseFormComponent,
    SetFormComponent,
    OutputHeaderComponent,
    OutputBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
