import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Network, data } from 'vis-network/standalone/esm/vis-network';
import { DataSet } from 'vis-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  // private network: Network;
  network: any = '';

  constructor(private http: HttpClient){
    // console.log("hello")
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  async getFamilyData(){
    try {
      var response = await this.http.post<any>("http://127.0.0.1:5000/lookup", { "id": "65468d061faa9c9f9715586b" }, this.httpOptions).toPromise()
      console.log(response);
      return response
    } catch (error) {
      console.error(
        "error in getting data",
        error
      );
    }
  }

  async ngOnInit() {
    var person_and_relations = await this.getFamilyData();
    console.log(person_and_relations)

    const new_nodes_array: any[] = person_and_relations['persons']
    const new_edges_array: any[] = person_and_relations['relations']

    // Define no/des and edges data for the family tree
    const nodes = new DataSet(new_nodes_array);

    const edges = new DataSet(new_edges_array);

    // Configure options
    const options = {
      nodes: {
        shape: 'box',
      },
    };

    // Find the container element by ID
    const container = document.getElementById('familyTree');

    // Check if the container element exists
    if (container) {
      console.log("container found!")
      // Create the network visualization
      this.network = new Network(container, { nodes, edges }, options);
    } else {
      console.log("container not found!!!")
    }
  }

  ngAfterViewInit() {
    // Update the network layout after the view is initialized
    // this.network.fit();
  }
}
