import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssociateComponent } from './admin-associate.component';

describe('AdminAssociateComponent', () => {
  let component: AdminAssociateComponent;
  let fixture: ComponentFixture<AdminAssociateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAssociateComponent]
    });
    fixture = TestBed.createComponent(AdminAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
