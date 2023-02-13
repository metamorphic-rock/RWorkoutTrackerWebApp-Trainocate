import { Component, OnInit } from '@angular/core';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';
import { WorkoutItemsServicesService } from 'src/app/Services/workout-items-services.service';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent {
  constructor(private workoutItemService:WorkoutItemsServicesService){}
  workouts:WorkoutItem[]=[]
  ngOnInit():void{
    this.workoutItemService.GetAllWorkoutFromDB().subscribe(workouts=>{
      this.workouts=workouts
    })
  }
  DeleteWorkoutEventHandler=()=>{

  }
}
