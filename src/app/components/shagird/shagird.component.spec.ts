import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShagirdComponent } from './shagird.component';

describe('ShagirdComponent', () => {
  let component: ShagirdComponent;
  let fixture: ComponentFixture<ShagirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShagirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShagirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
