import { Component,Input, Output,OnInit, EventEmitter } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';
import { WorkoutItem } from 'src/app/Models/WorkoutItemModel';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit{
  constructor(){}
  @Input() workout: WorkoutItem={
    'id':0,
    'workoutTitle':"",
    'date': new Date,
    'exercisesPerformed':[]
  }
  @Input() set: SetItem | undefined; //fix this later
  setItems:SetItem[]=[]
  ngOnInit(){
    
  }
  AddSetEventHandler =(payload:SetItem)=>{
    let set={...payload}
    this.setItems.push(set)
    this.ngOnInit()
  }
}
