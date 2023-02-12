import { TestBed } from '@angular/core/testing';

import { SetItemServicesService } from './set-item-services.service';

describe('SetItemServicesService', () => {
  let service: SetItemServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetItemServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
