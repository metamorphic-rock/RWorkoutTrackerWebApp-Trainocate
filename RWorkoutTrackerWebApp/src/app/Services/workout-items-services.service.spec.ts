import { TestBed } from '@angular/core/testing';

import { WorkoutItemsServicesService } from './workout-items-services.service';

describe('WorkoutItemsServicesService', () => {
  let service: WorkoutItemsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutItemsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
