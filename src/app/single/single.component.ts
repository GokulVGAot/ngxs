import { Component, OnInit } from '@angular/core';
import { Select,Store } from '@ngxs/store';
import { SetSelectedEvent } from '../action/event.actions';
import { EventState } from '../state/event.state';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  selecteddata!:any;

  @Select(EventState.getSelectedEvent) selectedEvent$!:Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.selectedEvent$.subscribe(data=>{
      this.selecteddata=data
      console.log(data)
    })
  }

}
