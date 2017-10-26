import { TestBed, inject } from '@angular/core/testing';

import { PurchaseTicketsService } from './purchase-tickets.service';

describe('PurchaseTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseTicketsService]
    });
  });

  it('should be created', inject([PurchaseTicketsService], (service: PurchaseTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
