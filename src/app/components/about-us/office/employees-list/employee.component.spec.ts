import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EmployeeComponent} from './employee.component';
import {TranslateModule} from '@ngx-translate/core';
import {MockCompany} from '../../../../shared/mocks/company.mock';
import {EventManager} from '../../../../shared/services/event_manager';


describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot() ],
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    component.person = MockCompany.employees[0];
    component.eventManager = new EventManager();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
