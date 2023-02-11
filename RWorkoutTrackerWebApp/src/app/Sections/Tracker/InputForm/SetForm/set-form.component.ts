import { Component,Input } from '@angular/core';
import { SetItem } from 'src/app/Models/SetItemModel';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent {
  @Input() set:SetItem={
    'exerciseId':0,
    'workoutId':0,
    'id':0,
    'weight':0,
    'reps':0,
  }
  SaveSet=()=>{

  }
}
