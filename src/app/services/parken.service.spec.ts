import { TestBed, inject } from '@angular/core/testing';

import { ParkenService } from './parken.service';

describe('ParkenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkenService]
    });
  });

  it('should be created', inject([ParkenService], (service: ParkenService) => {
    expect(service).toBeTruthy();
  }));
});
