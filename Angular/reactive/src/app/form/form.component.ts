import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
_searchSubject: Subject<string>; 
_logs: Array<string>= []; 

  constructor() { 
    this._searchSubject = new Subject<string>()
    this._searchSubject.pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(searchText => this._logs.push(searchText))
  }

  ngOnInit() {
  }
  onChange(searchText: string) { 
    this._searchSubject.next(searchText)
  }
}
