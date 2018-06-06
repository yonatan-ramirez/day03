import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangermessageComponent } from './dangermessage.component';

describe('DangermessageComponent', () => {
  let component: DangermessageComponent;
  let fixture: ComponentFixture<DangermessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangermessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
