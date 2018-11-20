import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { EmployeesService } from '../../services';

@Component({
	selector: 'app-simple-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class SimplePageComponent {

	public gridOptions: GridOptions = {
		columnDefs: [
			{headerName: 'Email', field: 'email'},
			{headerName: 'First Name', field: 'firstName'},
			{headerName: 'Last Name', field: 'lastName'},
			{headerName: 'Birth Date', field: 'birthDate'},
			{headerName: 'Grade', field: 'grade'},
			{headerName: 'Specialization', field: 'specialization'},
			{headerName: 'Experience (years)', field: 'experienceYears'},
		],
		rowData: this.employeesService.generateData(10)
	};

	constructor(private employeesService: EmployeesService) { }
}
