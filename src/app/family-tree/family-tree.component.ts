import { Component } from '@angular/core';
import FamilyTree from 'src/assets/balkanapp/familytree';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    private http: HttpClient
  ) { }

  async getFamilyData() {
    // const urlCassandra = ""
    const url = "http://127.0.0.1:5000/lookup"
    try {
      const response = await this.http.post<any>(url, {"id": "65468d061faa9c9f9715586b"}, this.httpOptions).toPromise();
      console.log(response);
      return response
    } catch (error) {
      console.error('Error occurred while data: ', error);
    }
  }

  async ngOnInit() {

    const relations = await this.getFamilyData();
    console.log("print after getFamilydata function")
    const tree = document.getElementById('tree');
    if (tree) {
        var family = new FamilyTree(tree, {
          nodeTreeMenu: true,
            nodeBinding: {
            field_0: "name",
            img_0: "img"
            },
        });

        family.load(relations);
    }
  }
}
