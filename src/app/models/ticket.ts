export class TicketBuyer {
    email: string;
    phonenumber: string;
}

export class Ticket {
    agegroup: string = "ADULT_TICKET";
    foodRes: string = "NONE_FOOD";
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
    bardonation: number;
    bidnumber: number;
    buyer: TicketBuyer;
    gluten: boolean;
}
