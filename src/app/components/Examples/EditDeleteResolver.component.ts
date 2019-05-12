import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-resolver-tree-grid',
  template: `
    <h2>Add, Edit and Delete Resolver Component</h2>
    <db-angular-tree-grid 
    [data]="data" 
    [configs]="configs"
    (rowdelete)="onRowDelete($event)" 
    (rowsave)="onRowSave($event)" 
    (rowadd)="onRowAdd($event)">
    </db-angular-tree-grid>
    <p>If Add, Edit and Delete needs to be resolved after confirmation from backend then resolve_add, resolve_edit and resolve_delete needs to be set to true under actions config. And then listen to the rowadd, rowsave and rowdelete events. See below for more details.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0"></iframe> 
  `
})
export class EditDeleteResolverComponent {
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
    actions: {
      add: true,
      edit: true,
      delete: true,
      edit_parent: true,
      resolve_add: true,
      resolve_delete: true,
      resolve_edit: true
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

    onRowAdd($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);      
    }

    onRowSave($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);
    }

    onRowDelete($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);
    }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/ffc4361127e89fac234ef93ed1645eab.js";

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