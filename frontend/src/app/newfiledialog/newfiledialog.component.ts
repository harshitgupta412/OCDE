import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { fileInterface, TreeNode } from '../fileInterface';
import { NbCardModule } from '@nebular/theme'
import { CodefetchService } from '../codefetch.service';

@Component({
  selector: 'ngx-dialog-name-prompt',
  template: `
      <nb-card>
      <nb-card-header>Enter your name</nb-card-header>
      <nb-card-body>
        <label class="name-label" for="name">Name:</label>
        <input class="input" #name nbInput id="name" placeholder="Name">
        <br>
        <nb-checkbox (checkedChange)="toggle($event)">Is this a file?</nb-checkbox>
        <br>
        <nb-select #parent placeholder="Select Parent Directory" [(selected)]="dir" style="width: 200px;">
          <nb-option *ngFor="let folder of dirList" value="{{folder.file_id}}">{{folder.relative_location}}{{folder.filename}}</nb-option>
        </nb-select>
      </nb-card-body>
      <nb-card-footer>
        <button class="cancel" nbButton status="danger" (click)="cancel()">Cancel</button>
        <button nbButton status="success" (click)="submit(name.value)">Submit</button>
      </nb-card-footer>
    </nb-card>
  `,
  styleUrls: ['newfiledialog.scss'],
})
export class NewfiledialogComponent implements OnInit{

  constructor(protected ref: NbDialogRef<NewfiledialogComponent>, private _fileService: CodefetchService) {}
  dir = "";
  dirList = [];
  checked = false;

  ngOnInit(): void {
    this._fileService.getFolder().subscribe(
      _data => {
        console.log(_data);
        if(_data["success"]==false) {
          console.error(
            _data["message"]
          );
        }
        else {
          console.log("success");
          this.dirList = _data["data"];
        }
      }
    );
  }

  toggle(checked: boolean) {
    this.checked = checked;
  }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close([name,this.checked,this.dir]);
  }
  }