export class Donor {
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
}

export class Item {
    constructor() {
        this.donor = new Donor();
        this.name = "";
        this.description = "";
    }
    donor: Donor;
    name: string;
    description: string;
    value: number;
    minvalue: number;
    category: string;
    quantity: number;
    eventdate: string;
    eventtypedtime: string;
    policy: string;
}
