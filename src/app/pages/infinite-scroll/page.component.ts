import { Component } from '@angular/core';
import { GridOptions, ValueFormatterParams, GridReadyEvent } from 'ag-grid-community';

import { EmployeesService } from '../../services';

const GRADE_DISPLAY_NAME: {[key: number]: string} = {
	1: 'Junior',
	2: 'Middle',
	3: 'Senior',
	4: 'Principal',
};

const INFINITE_SCROLL_ITEMS_COUNT = 300;

@Component({
	selector: 'app-infinite-scroll-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class InfiniteScrollPageComponent {

	public paginationPageSize = 10;

	public gridOptions: GridOptions = {
		onGridReady: (params: GridReadyEvent) => this.onGridReady(params),
		rowModelType: 'infinite',
		cacheBlockSize: 30,

		columnDefs: [
			{headerName: 'Email', field: 'email'},
			{headerName: 'First Name', field: 'firstName'},
			{headerName: 'Last Name', field: 'lastName'},
			{headerName: 'Birth Date', field: 'birthDate',
				valueFormatter: (params: ValueFormatterParams) => {
					return params.value ? new Date(params.value).toLocaleDateString() : null;
				}
			},
			{headerName: 'Grade', field: 'grade',
				valueFormatter: (params: ValueFormatterParams) => {
					return GRADE_DISPLAY_NAME[params.value];
				}
			},
			{headerName: 'Specialization', field: 'specialization'},
			{headerName: 'Experience (years)', field: 'experienceYears'},
		],
	};

	constructor(private employeesService: EmployeesService) { }


	private onGridReady(params: GridReadyEvent): void {
		// Data loaded from the server
		const data = this.employeesService.generateData(INFINITE_SCROLL_ITEMS_COUNT);

		const dataSource = {
			rowCount: null,
			getRows: (getRowsParams) => {
				setTimeout(() => {
					const rowsThisPage = data.slice(getRowsParams.startRow, getRowsParams.endRow);
					let lastRow = -1;
					if (data.length <= getRowsParams.endRow) {
						lastRow = data.length;
					}
					getRowsParams.successCallback(rowsThisPage, lastRow);
				}, 1500);
			}
			};

			params.api.setDatasource(dataSource);
	}
}
