import { Event } from '../lib/Event';

export class UserDeleted extends Event {
    static eventName = 'user-deleted'
    constructor () {
        super(UserDeleted.eventName, {})
        Object.defineProperty(UserDeleted, 'eventName', {
            writable: false, configurable: false, enumerable: true
        })
    }

    static commit (state, event){
        state.deletedAt = event.timestamp;
        state.updatedAt = event.timestamp;
        return state;
    }
}