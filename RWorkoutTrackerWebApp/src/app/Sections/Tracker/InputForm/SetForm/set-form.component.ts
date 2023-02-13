import { Component,Input,EventEmitter,OnInit ,Output } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';
import { ExerciseItem } from 'src/app/Models/ExerciseItemModel';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';
import { SetItemServicesService } from 'src/app/Services/set-item-services.service';
import { ExerciseItemServicesService } from 'src/app/Services/exercise-item-services.service';
import { WorkoutItemsServicesService } from 'src/app/Services/workout-items-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent{
  constructor(private setItemService:SetItemServicesService,
              private exerciseItemService:ExerciseItemServicesService,
              private workoutItemService:WorkoutItemsServicesService,
              private router:Router){}
  @Input() set:SetItem={
    'exerciseName':'',
    'exerciseId':0,
    'workoutId':0,
    'id':0,
    'weight':0,
    'reps':0,
  }
  @Output() AddSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>()
  workout!: WorkoutItem;
  exercise!: ExerciseItem;
  sets: SetItem[]=[]
  private reloaded = false;

  ngOnInit():void {
    this.setItemService.GetAllSetFromDB().subscribe((s)=>{
      this.sets=s
    })
    this.exerciseItemService.GetLastAddedExerciseFromDB().subscribe((e)=>{
      this.exercise=e
      this.exercise.id=e.id
      console.log("ngOninit works exercise Item")
      console.log(this.exercise.id)
    })
    this.workoutItemService.GetLastAddedWorkoutFromDB().subscribe((w)=>{
      this.workout=w
      this.workout.id=w.id
      console.log("ngOninit works Workout id")
      console.log(this.workout.id)
    })
    if (!this.reloaded) {
      this.reloaded = true;
      this.router.navigate(['/setForm'])
    }
    
  }
  AddSet=()=>{
    if(this.set.weight==0||this.set.reps==0){
      alert("Weight and reps are required!")
      this.router.navigate(['/setForm'])
      return
    }
    let payload={...this.set}
    console.log("workout Id" +this.workout.id)
    console.log("exercise ID"+this.exercise.id)
    payload.exerciseId=this.exercise.id
    payload.exerciseName=this.exercise.exerciseName
    payload.workoutId=this.workout.id
    this.setItemService.SaveSetToDB(payload).subscribe(()=>{
      this.AddSetEvent.emit(payload)
    })
    console.log(payload)
    // this.router.navigateByUrl(this.router.url)
    window.location.reload()
    this.ngOnInit()
  }
  DeletSetEventHandler=(set:SetItem)=>{
    let setIndex = this.sets.findIndex(s => s.id === set.id);
    this.sets.splice(setIndex, 1);
  }
  FinishWorkout=()=>{
    alert("Do you want to end this workout?")
  }
}
