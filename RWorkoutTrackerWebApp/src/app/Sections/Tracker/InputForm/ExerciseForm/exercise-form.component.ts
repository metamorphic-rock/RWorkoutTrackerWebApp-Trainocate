import { Component, Input, OnInit } from '@angular/core';
import { ExerciseItem } from 'src/app/Models/ExerciseItemModel';
import { MuscleGroupItems } from 'src/app/Models/MuscleGroup';
import { SetItem } from 'src/app/Models/SetItemModel';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';
import { ExerciseItemServicesService } from 'src/app/Services/exercise-item-services.service';
import { WorkoutItemsServicesService } from 'src/app/Services/workout-items-services.service';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent {
  constructor(private exerciseItemService:ExerciseItemServicesService,
              private workoutItemService:WorkoutItemsServicesService){}
  @Input() exercise: ExerciseItem = {
    'id': 0,
    'workoutId':0,
    'exerciseName': '',
    'muscleGroup': '',
    'performedSets': []
  }
  @Input() set: SetItem | undefined; //fix this later
  setItems: SetItem[] = []
  workout!: WorkoutItem
  ngOnInit():void {
    this.workoutItemService.GetLastAddedWorkoutFromDB().subscribe((w)=>{
      this.workout=w
    })
  }
  enableAddSet: boolean = false
  SaveExercise = () => {
    this.enableAddSet = true;
    let payload ={...this.exercise}
    payload.workoutId=Number(this.workout.id)
    this.exerciseItemService.SaveExerciseToDB(payload).subscribe()
    console.log(payload)
    this.ngOnInit()
  }
  FinishExercise=()=>{
    if(this.exercise.exerciseName==""||this.exercise.muscleGroup==""){
      return;
    };
    this.exercise.exerciseName=""
    this.exercise.muscleGroup=""
  }
  AddSetEventHandler = (payload: SetItem) => {
    let set = { ...payload }
    this.setItems.push(set)
    this.ngOnInit()
  }
  muscleGroup: MuscleGroupItems[] = [
    {
      "id": 1,
      "name": "Chest"
    },
    {
      "id": 2,
      "name": "Back"
    },
    {
      "id": 3,
      "name": "Shoulders"
    },
    {
      "id": 4,
      "name": "Arms"
    },
    {
      "id": 5,
      "name": "Core"
    },
    {
      "id": 6,
      "name": "Quads"
    },
    {
      "id": 7,
      "name": "Glutes and Hamstrings"
    },
    {
      "id": 8,
      "name": "Calves"
    }
  ];
}
