import { TestBed } from '@angular/core/testing';

import { MyAngularLibService } from './my-angular-lib.service';

describe('MyAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAngularLibService = TestBed.get(MyAngularLibService);
    expect(service).toBeTruthy();
  });
});
