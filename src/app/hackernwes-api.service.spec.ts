/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackernwesApiService } from './hackernwes-api.service';

describe('HackernwesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackernwesApiService]
    });
  });

  it('should ...', inject([HackernwesApiService], (service: HackernwesApiService) => {
    expect(service).toBeTruthy();
  }));
});
