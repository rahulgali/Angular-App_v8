import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularElementComponent } from './my-angular-element.component';

describe('MyAngularElementComponent', () => {
  let component: MyAngularElementComponent;
  let fixture: ComponentFixture<MyAngularElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAngularElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAngularElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
