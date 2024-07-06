import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImtahanComponent } from './imtahan.component';

describe('ImtahanComponent', () => {
  let component: ImtahanComponent;
  let fixture: ComponentFixture<ImtahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImtahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImtahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
