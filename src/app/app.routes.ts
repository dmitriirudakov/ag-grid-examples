import { Route } from '@angular/router';

import {
	SimplePageComponent,
	ValueFormatterPageComponent,
	FilterSortPageComponent,
	EditableCellPageComponent,
	InfiniteScrollPageComponent,
	CellRendererPageComponent,
	ExportPageComponent
} from './pages';

export interface CustomRoute extends Route {
	name: string;
}

export declare type CustomRoutes = CustomRoute[];

export const routes: CustomRoutes = [
	{ name: 'Simple', path: 'simple', component: SimplePageComponent },
	{ name: 'Value Formatter', path: 'value-formatter', component: ValueFormatterPageComponent },
	{ name: 'Filter/Sort', path: 'filter-sort', component: FilterSortPageComponent },
	{ name: 'Editable Cell', path: 'editable-cell', component: EditableCellPageComponent },
	{ name: 'Infinite Scroll', path: 'infinite-scroll', component: InfiniteScrollPageComponent },
	{ name: 'Cell Renderer', path: 'cell-renderer', component: CellRendererPageComponent },
	{ name: 'Export', path: 'export', component: ExportPageComponent },
];
