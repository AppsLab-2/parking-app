import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnbookingFormularComponent } from './unbooking-formular.component';

describe('UnbookingFormularComponent', () => {
  let component: UnbookingFormularComponent;
  let fixture: ComponentFixture<UnbookingFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnbookingFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnbookingFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
