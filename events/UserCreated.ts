import { Event } from '../lib/Event';

interface UserCreatedData {
    id: string;
    name: string;
    email: string;
}

export class UserCreated extends Event {
    static eventName: string = 'user-created';

    constructor(data: UserCreatedData) {
        super(UserCreated.eventName, data);
        Object.defineProperty(UserCreated, 'eventName', {
            writable: false,
            configurable: false,
            enumerable: true
        });
    }

    static commit(state: any, event: { data: UserCreatedData; timestamp: Date }): any {
        state.id = event.data.id;
        state.name = event.data.name;
        state.email = event.data.email;
        state.createAt = event.timestamp;
        state.updatedAt = event.timestamp;
        return state;
    }
}

