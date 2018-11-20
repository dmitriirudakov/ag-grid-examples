import { Component } from '@angular/core';
import { GridOptions, ValueGetterParams, GridApi, GridReadyEvent } from 'ag-grid-community';

import { EmployeesService } from '../../services';

const GRADE_DISPLAY_NAME = {
	1: 'Junior',
	2: 'Middle',
	3: 'Senior',
	4: 'Principal',
};

@Component({
	selector: 'app-export-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class ExportPageComponent {

	public gridApi: GridApi;

	public gridOptions: GridOptions = {
		onGridReady: (params) => this.onGridReady(params),
		columnDefs: [
			{headerName: 'Email', field: 'email'},
			{headerName: 'First Name', field: 'firstName'},
			{headerName: 'Last Name', field: 'lastName'},
			{headerName: 'Birth Date', field: 'birthDate',
				// valueFormatter will not work here because it changes a data for display only
				valueGetter: (params: ValueGetterParams) => {
					return new Date(params.data.birthDate).toLocaleDateString();
				},
			},
			{headerName: 'Grade', field: 'grade',
				// valueFormatter will not work here because it changes a data for display only
				valueGetter: (params: ValueGetterParams) => {
					return GRADE_DISPLAY_NAME[params.data.grade];
				},
			},
			{headerName: 'Specialization', field: 'specialization'},
			{headerName: 'Experience (years)', field: 'experienceYears'},
		],
		rowData: this.employeesService.generateData(10)
	};

	constructor(private employeesService: EmployeesService) { }

	public exportDataAsCsv(): void {
		this.gridApi.exportDataAsCsv();
	}

	public onGridReady(params: GridReadyEvent): void {
		this.gridApi = params.api;
	}
}
