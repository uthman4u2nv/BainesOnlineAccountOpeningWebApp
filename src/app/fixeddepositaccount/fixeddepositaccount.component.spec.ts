import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeddepositaccountComponent } from './fixeddepositaccount.component';

describe('FixeddepositaccountComponent', () => {
  let component: FixeddepositaccountComponent;
  let fixture: ComponentFixture<FixeddepositaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixeddepositaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixeddepositaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
