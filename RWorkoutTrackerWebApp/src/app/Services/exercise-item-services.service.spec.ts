import { TestBed } from '@angular/core/testing';

import { ExerciseItemServicesService } from './exercise-item-services.service';

describe('ExerciseItemServicesService', () => {
  let service: ExerciseItemServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseItemServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
