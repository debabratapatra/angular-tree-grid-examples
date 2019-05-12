import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-cond-row-edit',
  template: `
   <h2>Conditional Row Edit, Delete and CSS Class</h2>
    <db-angular-tree-grid [data]="data" [configs]="configs"></db-angular-tree-grid>
    <p> If some rows in the grid shouldn't be edited or deleted then row_edit_function and row_delete_function methods can be set at the grid level. These methods will get row_data as arguments.
    </p>
    <p> If some rows need to be highlighted in the grid then row_class_function function can be set.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0">
  </iframe>
  `,
})
export class CondRowEditComponent {
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
      edit_parent: true
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
    ],
    row_edit_function: function(rec) {
      if (rec.parent === 0) {
        return false;
      } else {
        return true;
      }
    },
    row_delete_function: function(rec) {
      if (rec.parent === 0) {
        return false;
      } else {
        return true;
      }
    },
    row_class_function: function(rec) {
      return 'row-custom';
    }
  };

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/d52b4f05e0ca527d948d1c596b83193e.js";

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