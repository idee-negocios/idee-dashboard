import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsManagementComponent } from './clients-management.component';

describe('ClientsManagementComponent', () => {
  let component: ClientsManagementComponent;
  let fixture: ComponentFixture<ClientsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
