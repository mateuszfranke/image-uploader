import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-uploader';
  fileSubmitted: boolean = false;

  onFileSubmit($event: boolean): void {
    console.log($event);
    this.fileSubmitted = $event;
  }
}
