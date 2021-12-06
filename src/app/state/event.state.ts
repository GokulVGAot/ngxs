import { Selector, State, StateContext, Action } from '@ngxs/store';
import { GetEventAction, SetSelectedEvent } from '../action/event.actions';
import { ApiService } from '../apiService/api.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { state } from '@angular/animations';

export class EventStateModel {
  events: any = [];
  selectedEvent: any;
}

@State<EventStateModel>({
  name: 'events',
  defaults: {
    events: [],
    selectedEvent:[],
  },
})
@Injectable()
export class EventState {
  eventData: any;

  constructor(private apiService: ApiService) {}

  @Selector()
  static getEvents(state: EventStateModel) {
    return state.events;
  }

  @Selector()
  static getSelectedEvent(state:EventStateModel){
      return state.selectedEvent
  }

  @Action(GetEventAction)
  getevents({ getState, setState }: StateContext<EventStateModel>) {
    return this.apiService.getAllEevents().pipe(
      tap((result) => {
        const state = getState();
        this.eventData = result;

        setState({
          ...state,
          events: this.eventData['result']['content'],
        });
      })
    );
  }

  @Action(SetSelectedEvent)
  selectevent(
    { getState, setState }: StateContext<EventStateModel>,
    { payload }: SetSelectedEvent
  ) {
    const state = getState();
    setState({
      ...state,
      selectedEvent:payload
    });
  }
}
