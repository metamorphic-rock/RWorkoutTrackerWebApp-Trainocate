import { Component,EventEmitter,Input, Output } from '@angular/core';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';
import { WorkoutItemsServicesService } from 'src/app/Services/workout-items-services.service';

@Component({
  selector: 'app-previous-workouts',
  templateUrl: './previous-workouts.component.html',
  styleUrls: ['./previous-workouts.component.scss']
})
export class PreviousWorkoutsComponent {
  constructor(private workoutItemService:WorkoutItemsServicesService){}
  @Input() workout:WorkoutItem={
    'id':0,
    'workoutTitle':'',
    'date': new Date,
    'exercisesPerformed':[]
  }
  editEnable:boolean=false
  EditWorkout=()=>{
    this.editEnable=!this.editEnable
  }
  @Output() deleteWorkoutEvent: EventEmitter<any>=new EventEmitter<any>()
  DeleteWorkout=()=>{
    let workoutId=Number(this.workout.id)
    this.workoutItemService.DeleteWorkoutFromDB(workoutId).subscribe()
    console.log(workoutId)
  }
  SaveChanges=()=>{
    this.workoutItemService.SaveWorkoutToDB(this.workout).subscribe()
  }
}
