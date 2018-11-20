import { Component } from '@angular/core';
import { GridOptions, ValueFormatterParams } from 'ag-grid-community';

import { EmployeesService } from '../../services';

const GRADE_DISPLAY_NAME = {
	1: 'Junior',
	2: 'Middle',
	3: 'Senior',
	4: 'Principal',
}

const FILTER = {
	DATE: 'agDateColumnFilter',
	NUMBER: 'agNumberColumnFilter',
	TEXT: 'agTextColumnFilter',
	CUSTOM: '-custom-', // Filter Component where you can provide you own filter written in a framework of your choice
}

@Component({
	selector: 'app-filter-sort-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class FilterSortPageComponent {

	public gridOptions: GridOptions = {
		// turn on filtering
		enableFilter: true,
		// turn on sorting
		enableSorting: true,

		columnDefs: [
			{headerName: 'Email', field: 'email', suppressFilter: true, suppressSorting: true},
			{headerName: 'First Name', field: 'firstName', suppressFilter: true},
			{headerName: 'Last Name', field: 'lastName', suppressFilter: true},
			{headerName: 'Birth Date', field: 'birthDate', filter: FILTER.DATE,
				valueFormatter: (params: ValueFormatterParams) => {
					return params.value ? new Date(params.value).toLocaleDateString() : null;
				}
			},
			{headerName: 'Grade', field: 'grade', suppressFilter: true,
				valueFormatter: (params: ValueFormatterParams) => {
					return GRADE_DISPLAY_NAME[params.value];
				}},
			{headerName: 'Specialization', field: 'specialization', suppressFilter: true},
			{headerName: 'Experience (years)', field: 'experienceYears', filter: FILTER.NUMBER},
		],
		rowData: this.employeesService.generateData(10)
	};

	constructor(private employeesService: EmployeesService) { }
}
