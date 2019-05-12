import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-grid',
  template: `
    <h2>Filter Component</h2>
    <db-angular-tree-grid 
    [data]="data" 
    [configs]="configs"
    (rowdelete)="onRowDelete($event)" 
    (rowsave)="onRowSave($event)" 
    (rowadd)="onRowAdd($event)">
    </db-angular-tree-grid>
    <p>
    Enable filter at grid level to enable filter toolbar. Filter can be disabled at column level.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0"></iframe> 
  `
})
export class FilterComponent {
  data: any[] = [
    { id: 1, name: 'Ashok', age: 60, parent: 0},
    { id: 2, name: 'Sam', age: 40, parent: 1},
    { id: 3, name: 'Sriya', age: 36, parent: 1},
    { id: 4, name: 'Prakash', age: 20, parent: 2},
    { id: 5, name: 'Sneha', age: 21, parent: 3},
    { id: 6, name: 'Pritam', age: 60, parent: 34},
    { id: 7, name: 'Roshan', age: 40, parent: 6},
    { id: 8, name: 'Suraj', age: 36, parent: 6},
    { id: 9, name: 'Swarup', age: 20, parent: 8},
    { id: 10, name: 'Aditya', age: 21, parent: 8},
  ];

    configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    filter: true,
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        editable: true
      },
      {
        name: 'age',
        header: 'Age',
        editable: true,
        renderer: function(value) {
          return value + ' years';
        }
      }
    ]
    };

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/02a16518d3314039f3288144a0b09b40.js";

    ngAfterViewInit() {
      const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        const content = `
            <html>
            <head>
              <base target="_parent">
            </head>
            <body>
            <script type="text/javascript" src="${this.gistUrl}"></script>
            </body>
          </html>
        `;
        doc.open();
        doc.write(content);
        doc.close();
    }
}