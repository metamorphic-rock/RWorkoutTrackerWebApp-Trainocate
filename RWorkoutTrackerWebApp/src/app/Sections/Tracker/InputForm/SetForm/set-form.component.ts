import { Component,Input,EventEmitter,OnInit ,Output } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';
import { ExerciseItem } from 'src/app/Models/ExerciseItemModel';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';
import { SetItemServicesService } from 'src/app/Services/set-item-services.service';
import { ExerciseItemServicesService } from 'src/app/Services/exercise-item-services.service';
import { WorkoutItemsServicesService } from 'src/app/Services/workout-items-services.service';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent implements OnInit{
  constructor(private setItemService:SetItemServicesService,
              private exerciseItemService:ExerciseItemServicesService,
              private workoutItemService:WorkoutItemsServicesService){}
  @Input() set:SetItem={
    'exerciseName':'',
    'exerciseId':0,
    'workoutId':0,
    'id':0,
    'weight':0,
    'reps':0,
  }
  @Output() AddSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>()
  workout!: WorkoutItem
  exercise!: ExerciseItem
  sets: SetItem[]=[]
  ngOnInit():void {
    this.setItemService.GetAllSetFromDB().subscribe((s)=>{
      this.sets=s
    })
    this.exerciseItemService.GetLastAddedExerciseFromDB().subscribe((e)=>{
      this.exercise=e
    })
    this.workoutItemService.GetLastAddedWorkoutFromDB().subscribe((w)=>{
      this.workout=w
    })
  }
  AddSet=()=>{
    this.ngOnInit()
    let payload={...this.set}
    console.log(this.workout.id)
    console.log(this.exercise.id)
    payload.exerciseId=this.exercise.id
    payload.exerciseName=this.exercise.exerciseName
    payload.workoutId=this.workout.id
    this.setItemService.SaveSetToDB(payload).subscribe(()=>{
      this.AddSetEvent.emit(payload)
    })
    console.log(payload)
    
  }
}
