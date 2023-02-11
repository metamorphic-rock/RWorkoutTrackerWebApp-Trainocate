import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';

@Component({
  selector: 'app-output-body',
  templateUrl: './output-body.component.html',
  styleUrls: ['./output-body.component.scss']
})
export class OutputBodyComponent {
  @Input() set: SetItem={
    'id':0,
    'exerciseName':'',
    'exerciseId':0,
    'workoutId':0,
    'weight':0,
    'reps':0
  }
  @Output() editSetEvent : EventEmitter<any>=new EventEmitter<any>();
  EditSet=()=>{
    console.log("Edit set");
  };
  @Output() deleteSetEvent: EventEmitter<any>=new EventEmitter<any>();
  DeleteSet=()=>{
    // console.log("Delete set");
    // console.log(this.set);
    // let id=this.set.id
    // this.getSetItemService.deleteSet(id).subscribe(()=>{
    //   this.deleteSetEvent.emit(this.set);
    // })
  };
}
