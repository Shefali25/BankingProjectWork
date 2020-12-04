export class CustomerAddress
{
    cust_id:number;
    type_of_address:string;
    line1:string;
    line2:string;
    landmark:string;
    city:string;
    cust_state:string;
    pin_code:number;

public constructor(
    cust_id:number,
    type_of_address:string,
    line1:string,
    line2:string,
    landmark:string,
    city:string,
    cust_state:string,
    pin_code:number)
    {
        this.cust_id=cust_id;
        this.type_of_address=type_of_address;
        this.line1=line1;
        this.line2=line2;
        this.landmark=landmark;
        this.city=city;
        this.cust_state=cust_state;
        this.pin_code=pin_code;
    }
    
}