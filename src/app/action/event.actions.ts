export class GetEventAction{
static readonly type = '[EVENTS] fetch';
}

export class SetSelectedEvent{
    static readonly type="[EVENT] set"
    constructor(public payload:any){}
}

