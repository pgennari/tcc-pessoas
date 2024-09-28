import { Event } from '../lib/Event';

interface UserUpdatedData {
    name?: string;
    email?: string;
}

export class UserUpdated extends Event {
    static eventName: string = 'user-updated';

    constructor(data: UserUpdatedData) {
        super(UserUpdated.eventName, data);
        Object.defineProperty(UserUpdated, 'eventName', {
            writable: false,
            configurable: false,
            enumerable: true
        });
    }

    static commit(state: { name?: string; email?: string; updatedAt?: Date }, event: { data: UserUpdatedData; timestamp: Date }) {
        state.name = event.data.name ?? state.name;
        state.email = event.data.email ?? state.email;
        state.updatedAt = event.timestamp;
        return state;
    }
}

