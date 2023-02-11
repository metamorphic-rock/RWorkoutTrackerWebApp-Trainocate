import { Component,Input, Output,OnInit, EventEmitter } from '@angular/core';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  constructor(){}
  @Input() workout: WorkoutItem={
    'id':0,
    'workoutTitle':"",
    'date': new Date,
    'exercisesPerformed':[]
  }
}
