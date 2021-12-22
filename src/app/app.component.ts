import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
import { fetchedDataType } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public fetchedData : fetchedDataType[] = [];

  constructor(private _fetchDataService : FetchDataService){}

  ngOnInit(){
    this._fetchDataService.getData()
        .subscribe(data => this.fetchedData = data );
  }
}
