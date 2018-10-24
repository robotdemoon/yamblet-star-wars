import { TestBed, inject } from '@angular/core/testing';

import { ApiInternaService } from './api-interna.service';

describe('ApiInternaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiInternaService]
    });
  });

  it('should be created', inject([ApiInternaService], (service: ApiInternaService) => {
    expect(service).toBeTruthy();
  }));
});
