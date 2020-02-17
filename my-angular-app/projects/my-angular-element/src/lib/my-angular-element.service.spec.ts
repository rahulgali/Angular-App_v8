import { TestBed } from '@angular/core/testing';

import { MyAngularElementService } from './my-angular-element.service';

describe('MyAngularElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAngularElementService = TestBed.get(MyAngularElementService);
    expect(service).toBeTruthy();
  });
});
