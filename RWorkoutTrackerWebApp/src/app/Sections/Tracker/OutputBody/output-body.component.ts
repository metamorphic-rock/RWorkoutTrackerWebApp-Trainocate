import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';
import { ExerciseItem } from 'src/app/Models/ExerciseItemModel';
import { ExerciseItemServicesService } from 'src/app/Services/exercise-item-services.service';
import { SetItemServicesService } from 'src/app/Services/set-item-services.service';

@Component({
  selector: 'app-output-body',
  templateUrl: './output-body.component.html',
  styleUrls: ['./output-body.component.scss']
})
export class OutputBodyComponent implements OnInit{
  constructor(private setItemService:SetItemServicesService,
              private exerciseItemService:ExerciseItemServicesService){}
  enableSetEdit:boolean=false;
  @Input() set: SetItem={
    'id':0,
    'exerciseName':'',
    'exerciseId':0,
    'workoutId':0,
    'weight':0,
    'reps':0
  }
  exercise!: ExerciseItem;
  exerciseId:number=Number(this.set.exerciseId)
  ngOnInit(): void {  
    this.exerciseItemService.GetExerciseByIdFromDB(Number(this.set.exerciseId)).subscribe(e=>{
      this.exercise=e
      console.log(this.set.exerciseId)
      console.log(this.exercise)
    })
  }
  @Output() editSetEvent : EventEmitter<any>=new EventEmitter<any>();
  EditSet=()=>{
    this.enableSetEdit=!this.enableSetEdit
    console.log("Edit set");
  };
  @Output() deleteSetEvent: EventEmitter<any>=new EventEmitter<any>();
  DeleteSet=()=>{
    this.ngOnInit()
    console.log("Delete set");
    console.log(this.set);
    let id=this.set.id
    console.log(id)
    this.setItemService.DeleteSetFromDB(id).subscribe(()=>{
      this.deleteSetEvent.emit(this.set)
    })
  };
  SaveChanges=()=>{
    this.setItemService.SaveSetToDB(this.set).subscribe()
    console.log("edit set id : ")
    console.log(this.set.id)
  }
}
