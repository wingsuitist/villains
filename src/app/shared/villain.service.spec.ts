/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VillainService } from './villain.service';

describe('Service: Villain', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillainService]
    });
  });

  it('should ...', inject([VillainService], (service: VillainService) => {
    expect(service).toBeTruthy();
  }));
});
