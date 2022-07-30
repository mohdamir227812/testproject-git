import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercomsecComponent } from './sercomsec.component';

describe('SercomsecComponent', () => {
  let component: SercomsecComponent;
  let fixture: ComponentFixture<SercomsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercomsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercomsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
