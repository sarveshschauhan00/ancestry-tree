import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 async getData(){
  console.log("hello")
  try {
    console.log("hello1")
    const response = await this.http.post<any>("http://127.0.0.1:5000/lookup", { "id": "65468d061faa9c9f9715586b" }, this.httpOptions).toPromise()
    console.log(response, "hello2");
  } catch (error) {
    console.error(
      "error in getting data",
      error
    );
  }
 }
}
