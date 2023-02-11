import { Component, Input } from '@angular/core';
import { ExerciseItem } from 'src/app/Models/ExerciseItemModel';
import { MuscleGroupItems } from 'src/app/Models/MuscleGroup';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent {
  @Input() exercise:ExerciseItem={
    'id':0,
    'exerciseName':'',
    'muscleGroup':'',
    'performedSets':[]
  }
  enableAddSet:boolean=false
  SaveExercise=()=>{
    this.enableAddSet=true;
  }
  muscleGroup: MuscleGroupItems[]=[
    {
      "id":1,
      "name":"Chest"
  },
  {
      "id":2,
      "name":"Back"
  },
  {
      "id":3,
      "name":"Shoulders"
  },
  {
      "id":4,
      "name":"Arms"
  },
  {
      "id":5,
      "name":"Core"
  },
  {
      "id":6,
      "name":"Quads"
  },
  {
      "id":7,
      "name":"Glutes and Hamstrings"
  },
  {
      "id":8,
      "name":"Calves"
  }
  ];
}
