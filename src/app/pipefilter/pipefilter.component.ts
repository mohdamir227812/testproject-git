import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipefilter',
  templateUrl: './pipefilter.component.html',
  styleUrls: ['./pipefilter.component.css']
})
export class PipefilterComponent implements OnInit {
url='https://jsonplaceholder.typicode.com/comments'
  constructor(private _htts:HttpClient) { }
placeholderUserData;
searchItem="";
  ngOnInit(): void {
    this._htts.get(this.url).subscribe(gres=>{
      this.placeholderUserData=gres;
    })
  }

}
