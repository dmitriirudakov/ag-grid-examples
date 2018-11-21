import { Injectable } from '@angular/core';
import * as faker from 'faker';

import { Employee } from '../models';

@Injectable({
	providedIn: 'root'
})
export class EmployeesService {

	generateData(count: number): Employee[] {
		return new Array(count).fill({}).map(() => this.getFakeEmployee());
	}

	private getFakeEmployee(): Employee {
		return <Employee>{
			id: faker.random.uuid(),
			email: faker.internet.email(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			birthDate: +faker.date.between(new Date('1/1/1950'), new Date('1/1/2000')),
			grade: faker.random.number({min: 1, max: 4}),
			specialization: faker.helpers.randomize(['FrontEnd', 'BackEnd', 'Business Analyst', 'QA']),
			experienceYears: faker.random.number({min: 0, max: 5}),
		};
	}
}
