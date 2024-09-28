import { UserCreated } from "../events/UserCreated";
import { UserUpdated } from "../events/UserUpdated";
import { UserDeleted } from "../events/UserDeleted";

export class User {
  id: string | null = null;
  name: string | null = null;
  email: string | null = null;
  createdAt: Date | null = null;
  updatedAt: Date | null = null;
  deletedAt: Date | null = null;

  static collection: string = "users";

  #persistedEvents: (UserCreated | UserUpdated | UserDeleted)[] = [];
  #pendingEvents: (UserCreated | UserUpdated | UserDeleted)[] = [];

  constructor(persistedEvents: (UserCreated | UserUpdated | UserDeleted)[] = []) {
    if (persistedEvents.length > 0) {
      this.#persistedEvents = persistedEvents;
      // this.#upateInternalState();
    }
  }

  get events(): (UserCreated | UserUpdated | UserDeleted)[] {
    return [
        ...this.#persistedEvents,
        ...this.#pendingEvents
    ];
  }
}