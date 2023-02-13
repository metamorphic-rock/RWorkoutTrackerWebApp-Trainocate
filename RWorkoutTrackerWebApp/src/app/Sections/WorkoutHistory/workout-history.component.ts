import { Component } from '@angular/core';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent {
  constructor(){}
  workouts:WorkoutItem[]=[]

}
