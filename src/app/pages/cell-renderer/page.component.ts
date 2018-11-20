import { Component } from '@angular/core';
import { GridOptions, ValueFormatterParams } from 'ag-grid-community';

import { EmployeesService } from '../../services';
import { EmailCellRendererComponent } from './email-cell-renderer';

const GRADE_DISPLAY_NAME = {
	1: 'Junior',
	2: 'Middle',
	3: 'Senior',
	4: 'Principal',
};

@Component({
	selector: 'app-cell-renderer-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class CellRendererPageComponent {

	public gridOptions: GridOptions = {
		components: {
			mailRenderer: (params) => {
				const value: string = params.value;
				if (!value) {
					return null;
				}
				return `<a href="mailto:${value}">${value}</a>`;
			}
		},
		columnDefs: [
			{headerName: 'Email', field: 'email',
				cellRenderer: (params) => {
					const value: string = params.value;
					if (!value) {
						return null;
					}
					return `<a href="mailto:${value}">${value}</a>`;
				}
				// cellRenderer: "mailRenderer",
				// cellRendererFramework: EmailCellRendererComponent,
			},
			{headerName: 'First Name', field: 'firstName'},
			{headerName: 'Last Name', field: 'lastName'},
			{headerName: 'Birth Date', field: 'birthDate',
				valueFormatter: (params: ValueFormatterParams) => {
					return new Date(params.value).toLocaleDateString();
				}
			},
			{headerName: 'Grade', field: 'grade',
				valueFormatter: (params: ValueFormatterParams) => {
					return GRADE_DISPLAY_NAME[params.value];
				}},
			{headerName: 'Specialization', field: 'specialization'},
			{headerName: 'Experience (years)', field: 'experienceYears'},
		],
		rowData: this.employeesService.generateData(10)
	};

	constructor(private employeesService: EmployeesService) { }
}
