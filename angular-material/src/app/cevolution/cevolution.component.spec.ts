import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CevolutionComponent } from './cevolution.component';

describe('CevolutionComponent', () => {
  let component: CevolutionComponent;
  let fixture: ComponentFixture<CevolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CevolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
