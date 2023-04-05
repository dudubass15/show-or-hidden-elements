import { TestBed } from '@angular/core/testing';

import { ShowAndHiddenService } from './show-and-hidden.service';

describe('ShowAndHiddenService', () => {
  let service: ShowAndHiddenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAndHiddenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
