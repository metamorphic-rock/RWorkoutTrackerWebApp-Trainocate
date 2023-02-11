import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBodyComponent } from './output-body.component';

describe('OutputBodyComponent', () => {
  let component: OutputBodyComponent;
  let fixture: ComponentFixture<OutputBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
