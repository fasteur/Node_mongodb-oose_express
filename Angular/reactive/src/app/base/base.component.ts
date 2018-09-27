import { Component, OnInit } from '@angular/core';
import { Observable, from, Subscription, range, of, interval , ReplaySubject, timer, fromEvent} from 'rxjs'; 
import { map, repeat } from 'rxjs/operators';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
   array : string[];
  constructor() {
    this.array = ['gilles','joell','denis','anissa','guillaume','bogdan'];
    // let o : Observable<string> = from(this.array);
    // let o : Observable<string> = of('string');
    // let o : Observable<number> = range(0,20);
    // let o : Observable<number> = interval(100);
    // let o : Observable<number> = timer(2000, 500);
    // let o : Observable<number> = range(0, 100).pipe(map(val => val *10))
    let o : Observable<Event> = fromEvent(document,'keyup')
   
    

    // const subscriber1: Subscription = o.subscribe(
    //   data => {console.log(`Next : ${data}`);}, 
    //   err => {console.log(`Error ${err}`);}, 
    //   () => {console.log('Finished');}
    // )
    const subscriber1: Subscription = o.subscribe(
      data => {console.log(data);}, 
      err => {console.log(`Error ${err}`);}, 
      () => {console.log('Finished');}
    )

    // let i : Observable<number> = timer(2000, 500);
    // const subscriber2: Subscription = i.subscribe(
    //   data => {console.log(`Nixt : ${data}`);}, 
    //   err => {console.log(`Error ${err}`);}, 
    //   () => {console.log('Finished');}
    // )
   }

  ngOnInit() {
  }

}
