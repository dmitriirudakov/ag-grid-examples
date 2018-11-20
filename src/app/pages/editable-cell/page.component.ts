import { Component } from '@angular/core';
import { GridOptions, ValueFormatterParams, ValueGetterParams, ValueParserParams } from 'ag-grid-community';
import * as moment from 'moment';

import { Employee } from '../../models';
import { EmployeesService } from '../../services';

const GRADE_DISPLAY_NAME: {[key: number]: string} = {
	1: 'Junior',
	2: 'Middle',
	3: 'Senior',
	4: 'Principal',
};

const FILTER = {
	DATE: 'agDateColumnFilter',
	NUMBER: 'agNumberColumnFilter',
	TEXT: 'agTextColumnFilter',
	CUSTOM: '-custom-', // Filter Component where you can provide you own filter written in a framework of your choice
};
const DATE_FORMAT = 'MM/DD/YYYY';

@Component({
	selector: 'app-editable-cell-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class EditableCellPageComponent {

	public gridOptions: GridOptions = {
		// turn on filtering
		enableFilter: true,
		// turn on sorting
		enableSorting: true,

		defaultColDef: {
			editable: true
		},

		columnDefs: [
			{headerName: 'Email', field: 'email', suppressFilter: true, suppressSorting: true},
			{headerName: 'First Name', field: 'firstName', suppressFilter: true},
			{headerName: 'Last Name', field: 'lastName', suppressFilter: true},
			{headerName: 'Birth Date', field: 'birthDate', filter: FILTER.DATE,
				valueGetter: (params: ValueGetterParams) => {
					return new Date(params.data.birthDate).toLocaleDateString();
				},
				valueSetter: (params: ValueParserParams): boolean => {
					const employee: Employee = <Employee>params.data;
					const value: moment.Moment = moment(params.newValue, DATE_FORMAT);
					if (value.isValid()) {
						employee.birthDate = +value;
						return true;
					}
					return false;
				}
			},
			{headerName: 'Grade', field: 'grade', suppressFilter: true,
				valueGetter: (params: ValueGetterParams) => {
					return GRADE_DISPLAY_NAME[params.data.grade];
				},
				valueSetter: (params: ValueParserParams): boolean => {
					let isValid: boolean = false;
					const employee: Employee = <Employee>params.data;

					const grade: string = Object.keys(GRADE_DISPLAY_NAME)
						.find(key => GRADE_DISPLAY_NAME[key] === params.newValue);
					
					if (grade != null) {
						employee.grade = Number(grade);
						isValid = true;
					}

					return isValid;
				},
			},
			{headerName: 'Specialization', field: 'specialization', suppressFilter: true},
			{headerName: 'Experience (years)', field: 'experienceYears', filter: FILTER.NUMBER},
		],
		rowData: this.employeesService.generateData(10)
	};

	constructor(private employeesService: EmployeesService) { }
}
