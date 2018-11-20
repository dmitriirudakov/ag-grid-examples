import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationModule } from './components';
import {
	SimplePageComponent,
	ValueFormatterPageComponent,
	FilterSortPageComponent,
	EditableCellPageComponent,
	InfiniteScrollPageComponent,
	ExportPageComponent,
	CellRendererPageComponent,
	EmailCellRendererComponent
} from './pages';

@NgModule({
	declarations: [
		AppComponent,
		SimplePageComponent,
		ValueFormatterPageComponent,
		FilterSortPageComponent,
		EditableCellPageComponent,
		InfiniteScrollPageComponent,
		ExportPageComponent,
		CellRendererPageComponent,
		EmailCellRendererComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AgGridModule.withComponents([EmailCellRendererComponent]),
		BrowserAnimationsModule,
		MatButtonModule,
		NavigationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
