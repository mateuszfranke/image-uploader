import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() fileSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileInput(event: any) {

    var files = event.srcElement.files;
    this.fileSubmitted.emit(true);
    console.log(files);
  }
}
