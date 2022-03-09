import { TestBed } from '@angular/core/testing';

import { EstudioGhibliService } from './estudio-ghibli.service';

describe('EstudioGhibliService', () => {
  let service: EstudioGhibliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudioGhibliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
