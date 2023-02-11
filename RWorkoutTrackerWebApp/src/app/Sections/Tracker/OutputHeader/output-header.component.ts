import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-header',
  templateUrl: './output-header.component.html',
  styleUrls: ['./output-header.component.scss']
})
export class OutputHeaderComponent {
  @Input() numberOfSets: number=0;
}
