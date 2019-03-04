import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvesListComponent } from './aves-list.component';

describe('AvesListComponent', () => {
  let component: AvesListComponent;
  let fixture: ComponentFixture<AvesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
