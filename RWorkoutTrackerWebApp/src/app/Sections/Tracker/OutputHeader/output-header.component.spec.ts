import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputHeaderComponent } from './output-header.component';

describe('OutputHeaderComponent', () => {
  let component: OutputHeaderComponent;
  let fixture: ComponentFixture<OutputHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
