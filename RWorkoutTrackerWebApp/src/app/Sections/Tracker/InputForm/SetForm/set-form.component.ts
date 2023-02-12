import { Component,Input,EventEmitter, Output } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent {
  @Input() set:SetItem={
    'exerciseName':'',
    'exerciseId':0,
    'workoutId':0,
    'id':0,
    'weight':0,
    'reps':0,
  }
  @Output() AddSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>();
  AddSet=()=>{
    let payload={...this.set}
    this.AddSetEvent.emit(payload)
    console.log(payload)
  }
}
