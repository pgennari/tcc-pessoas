export class Event {
    public readonly id: string;
    public readonly name: string;
    public readonly timestamp: Date;
    public readonly data: any;

    constructor(name: string, data: any, id: string | null = null) {
        this.id = id || Date.now().toString(16);
        this.name = name;
        this.timestamp = new Date();
        this.data = data;
    }
}

