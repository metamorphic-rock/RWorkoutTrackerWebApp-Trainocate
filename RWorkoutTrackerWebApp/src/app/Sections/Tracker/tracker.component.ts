import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SetItem } from 'src/app/Models/SetItemModel';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';
import { WorkoutItemsServicesService } from 'src/app/Services/workout-items-services.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  constructor(private workoutItemService: WorkoutItemsServicesService,
              private router:Router) { }
  @Input() workout: WorkoutItem = {
    'id': 0,
    'workoutTitle': "",
    'date': new Date,
    'exercisesPerformed': []
  }
  @Input() set: SetItem | undefined; //fix this later
  setItems: SetItem[] = []
  inputAreValid:boolean=false
  ngOnInit() {

  }
  SaveWorkout = () => {
    this.ngOnInit()
    if (this.workout.workoutTitle == '' || this.workout.date == new Date) {
      alert("Workout title and date is needed!")
      this.router.navigate(['/tracker'])
      return
    } else {
      this.inputAreValid=true
      let payload = { ...this.workout }
      this.workoutItemService.SaveWorkoutToDB(payload).subscribe()
      console.log(payload)
    }
  }
  // AddSetEventHandler =(payload:SetItem)=>{
  //   let set={...payload}
  //   this.setItems.push(set)
  //   this.ngOnInit()
  // }
}
