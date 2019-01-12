import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	counter = 0;
	showing = true;
	log = [];

	clickity() {
		this.showing = this.showing === true?false:true;
		this.log.push({id: ++this.counter; timestamp: (new Date()).toUTCString());
	}
}
