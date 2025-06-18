import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicCRUD';

  db: ItemDB[] = new Array();
  showData: any = {};
   
  updatedItem;
  IsEdit: boolean = false;

  constructor(){}

  addData() {
    if (this.showData.data != null){
      this.db.push(this.showData);
    }

    this.showData = {};
  }

  editData(i) {
    this.IsEdit = true;
    this.showData.data = this.db[i].data;
    this.updatedItem = i;  
  }

  updateData() {
    let userUpdateDataAt = this.updatedItem;
    for (let i = 0; i < this.db.length; i++) {
      if (userUpdateDataAt == i) {
        this.db[i].data = this.showData.data;
      }
    }

    this.IsEdit = false;
    this.showData = {};
  }

  deleteData(i) {
    this.db.splice(i, 1);
  }
}

export class ItemDB {
  data: string;

  constructor(_data: string)
  {
    this.data = _data;
  }
}