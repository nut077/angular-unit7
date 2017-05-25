import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  content = 'Hello world!!';
  counter = 1;
  notelist = [];
  currentNode = {content: 'Node1', private: false};

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.notelist = [
      {id: 1, content: 'Note1'},
      {id: 2, content: 'Note2'},
      {id: 3, content: 'Note3'}
    ];
  }
}
