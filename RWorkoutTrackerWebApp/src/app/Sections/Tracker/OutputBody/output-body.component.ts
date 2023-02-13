import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';
import { SetItemServicesService } from 'src/app/Services/set-item-services.service';

@Component({
  selector: 'app-output-body',
  templateUrl: './output-body.component.html',
  styleUrls: ['./output-body.component.scss']
})
export class OutputBodyComponent implements OnInit{
  constructor(private setItemService:SetItemServicesService){}
  @Input() set: SetItem={
    'id':0,
    'exerciseName':'',
    'exerciseId':0,
    'workoutId':0,
    'weight':0,
    'reps':0
  }
  ngOnInit(): void {
    
  }
  @Output() editSetEvent : EventEmitter<any>=new EventEmitter<any>();
  EditSet=()=>{
    console.log("Edit set");
  };
  @Output() deleteSetEvent: EventEmitter<any>=new EventEmitter<any>();
  DeleteSet=()=>{
    this.ngOnInit()
    console.log("Delete set");
    console.log(this.set);
    let id=this.set.id
    console.log(id)
    this.setItemService.DeleteSetFromDB(id).subscribe()
  };
}
