import { Component, ViewChild, ElementRef } from '@angular/core';
import {AgeComponent} from './../Custom/Age.component';

@Component({
  selector: 'app-editor-tree-grid',
  template: `
    <h2>Custom Editor Component</h2>
    <db-angular-tree-grid [data]="data" [configs]="configs"></db-angular-tree-grid>
    <p>Custom Editor can be set in the editor config of the column. This Component needs to be extended from DefaultEditor and need to be added to the entryComponents of the module.
    See below for more details.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0"></iframe> 
  `
})
export class CustomEditorComponent {
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
          editor: AgeComponent
        }
      ]
    };

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/0a4c9b65b1f4f586c93ee61f540449a2.js";

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