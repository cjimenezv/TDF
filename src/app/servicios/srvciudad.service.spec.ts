import { TestBed } from '@angular/core/testing';

import { SrvciudadService } from './srvciudad.service';

describe('SrvciudadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvciudadService = TestBed.get(SrvciudadService);
    expect(service).toBeTruthy();
  });
});
