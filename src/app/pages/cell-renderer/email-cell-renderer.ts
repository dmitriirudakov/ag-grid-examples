import { Component } from '@angular/core';
import { ICellRenderer, ICellRendererFunc, ICellRendererComp } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
	selector: 'app-email-cell-renderer',
	template: '<a href="mailto:{{value}}">{{value}}</a>',
})
export class EmailCellRenderer implements AgRendererComponent {
    
    value: string;

    agInit(params: any) {
        this.value = params.value;
    }

    refresh() {
        return true;
    }
}