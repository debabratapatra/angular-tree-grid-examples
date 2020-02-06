import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularTreeGridComponent } from 'angular-tree-grid';

@Component({
  selector: 'app-filter-grid',
  template: `
    <h2>Dynamic Children Component</h2>
    <button (click)="collapseAll()">Collapse All</button><button (click)="expandAll()">Expand All</button>
    <p></p>
    <db-angular-tree-grid 
    #angularGrid
    (expand)="onExpand($event)"
    [data]="data" 
    [configs]="configs">
    </db-angular-tree-grid>
    <p>
    Children can be loaded dynamically. Let's suppose we want to load children on expand. Then set load_children_on_expand to true and listen to the expand event. See Below.
    </p>
    <p>
    A child can be treated as a leaf node(won't have expand icon) if node_leaf is set to true in the object. See below.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0"></iframe> 
  `
})
export class DynamicChildrenComponent {
  @ViewChild('angularGrid') angularGrid: AngularTreeGridComponent;
  data: any[] = [
    { id: 1, name: 'Prakash', age: 60, weight: 60, gender: 1, phone: 7930343463},
    { id: 2, name: 'Aditya', age: 40, weight: 90, gender: 1, phone: 7930343463}
  ];

    configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    load_children_on_expand: true,
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
      },
      {
        name: 'weight',
        header: 'Weight'
      },
      {
        name: 'gender',
        header: 'Gender',
        renderer: function(value) {
          return value ? 'Male' : 'Female';
        }
      },
      {
        name: 'phone',
        header: 'Phone'
      }
    ]
    };

  onExpand(e) {
    const row_data = e.data;
    if (row_data.id === 1) {
      setTimeout(() => {
        e.resolve([{ id: 4, name: 'Ashok', age: 60, weight: 60, gender: 1, phone: 7930343463, node_leaf: true},
          { id: 5, name: 'Sam', age: 40, weight: 60, gender: 1, phone: 7930343463},
          { id: 6, name: 'Sriya', age: 36, weight: 60, gender: 1, phone: 7930343463}]);
      }, 2000);
    } else if (row_data.id === 4){
      setTimeout(() => {
        e.resolve([{ id: 7, name: 'Ashok', age: 60, weight: 60, gender: 1, phone: 7930343463},
          { id: 8, name: 'Sam', age: 40, weight: 60, gender: 1, phone: 7930343463},
          { id: 9, name: 'Sriya', age: 36, weight: 60, gender: 1, phone: 7930343463}]);
      }, 2000);
    }
  }

  collapseAll() {
    this.angularGrid.collapseAll();
  }

  expandAll() {
    this.angularGrid.expandAll();
  }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/ff0cc1219a08a9e8737ab42ca4b17d56.js";

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