import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhibliComponent } from './ghibli.component';

describe('GhibliComponent', () => {
  let component: GhibliComponent;
  let fixture: ComponentFixture<GhibliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhibliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhibliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
