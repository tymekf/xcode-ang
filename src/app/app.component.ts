import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'xcode-ang';
  json: any;
  url = "http://localhost:8080/numbers/sort-command";

  numbersString: string | undefined;
  order: string | undefined;

  constructor(private http: HttpClient) {
  }

  submitData() {
    this.http.post(this.url, {
      numbers:this.numbersString?.split(","), order:this.order
    }).subscribe((data)=> {
      console.log(data);
      console.log(typeof data);
      this.json = JSON.stringify(data);
    });
  }
}
