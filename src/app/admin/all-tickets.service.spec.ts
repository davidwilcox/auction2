import { TestBed, inject } from '@angular/core/testing';

import { AllTicketsService } from './all-tickets.service';

describe('AllTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTicketsService]
    });
  });

  it('should be created', inject([AllTicketsService], (service: AllTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
