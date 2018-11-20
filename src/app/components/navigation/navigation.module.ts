import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { NavigationComponent } from './navigation.component';

@NgModule({
	declarations: [NavigationComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule
	],
	exports: [NavigationComponent]
})
export class NavigationModule { }
