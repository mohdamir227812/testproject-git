import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipefilterComponent } from './pipefilter.component';

describe('PipefilterComponent', () => {
  let component: PipefilterComponent;
  let fixture: ComponentFixture<PipefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
