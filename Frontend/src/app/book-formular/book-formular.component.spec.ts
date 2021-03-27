import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormularComponent } from './book-formular.component';

describe('BookFormularComponent', () => {
  let component: BookFormularComponent;
  let fixture: ComponentFixture<BookFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
