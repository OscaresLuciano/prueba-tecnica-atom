import { TestBed } from '@angular/core/testing';

import { IndexMockService } from './index-mock.service';

describe('IndexMockService', () => {
  let service: IndexMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
