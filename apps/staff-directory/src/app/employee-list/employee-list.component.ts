import { Component } from '@angular/core';
import { EmployeeTile } from '@hr-management/ui';
import { EmployeeSummary } from '@hr-management/shared';

@Component({
  selector: 'hr-management-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  readonly employees: EmployeeSummary[] = [
    {
      avatar: '/assets/avatar.png',
      firstName: 'John',
      lastName: 'Smith',
      title: 'Marketing Director',
      location: 'San Francisco, California',
      phone: '(555) 555-5555',
      cellPhone: '(555) 555-5555',
      email: 'john.smith@hrmanagement.com',
    },
    {
      avatar: '/assets/avatar.png',
      firstName: 'Maria',
      lastName: 'Thomson',
      title: 'Clerk',
      location: 'San Francisco, California',
      phone: '(555) 555-3335',
      cellPhone: '(555) 555-3335',
      email: 'maria.thomson@hrmanagement.com',
    },
  ];
  readonly employeeWithState: EmployeeTile[] = [
    {
      ...this.employees[0],
      type: 'active',
    },
    {
      ...this.employees[1],
      type: 'regular',
    },
  ];
}
