import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvesFormComponent } from './aves-form.component';

describe('AvesFormComponent', () => {
  let component: AvesFormComponent;
  let fixture: ComponentFixture<AvesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
