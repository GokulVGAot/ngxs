import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Select,Store } from '@ngxs/store';
import { Observable, observable,Subscription } from 'rxjs';
import { GetEventAction, SetSelectedEvent } from '../action/event.actions'; 
import { EventState } from '../state/event.state';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Select(EventState.getEvents) events$! : Observable<any>;
  // eventSubscription!:Subscription;


  

  constructor(private store:Store) { }

  ngOnInit(): void {
    console.log("from display")
     this.store.dispatch(new GetEventAction())
    console.log("outside")
     
  }
  onSelectingEvent(event:[]){
    this.store.dispatch(new SetSelectedEvent(event))
  }

}
