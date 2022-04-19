import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdtoinrComponent } from './usdtoinr.component';

describe('UsdtoinrComponent', () => {
  let component: UsdtoinrComponent;
  let fixture: ComponentFixture<UsdtoinrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdtoinrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdtoinrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
