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
import { HomeComponent } from './Sections/Home/home.component';
import { WorkoutHistoryComponent } from './Sections/WorkoutHistory/workout-history.component';
import { FooterComponent } from './Sections/Footer/footer.component';
import { PreviousWorkoutsComponent } from './Sections/WorkoutHistory/PreviousWorkouts/previous-workouts.component';


const appRoutes: Routes=[
  {path:'home',component: HomeComponent},
  {path:'tracker',component:TrackerComponent},
  {path:'exerciseForm', component: ExerciseFormComponent},
  {path:'setForm', component:SetFormComponent},
  {path:'workoutHistory',component: WorkoutHistoryComponent},
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
    OutputBodyComponent,
    HomeComponent,
    WorkoutHistoryComponent,
    FooterComponent,
    PreviousWorkoutsComponent
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
