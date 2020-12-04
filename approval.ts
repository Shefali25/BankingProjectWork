export class Approval
{
    approval_id:number;
    cust_id:number;
    srn:number;
    alloted_to:number;

    public constructor(
        approval_id:number,
        cust_id:number,
        srn:number,
        alloted_to:number 
    )
    {
        this.approval_id=approval_id;
        this.cust_id=cust_id;
        this.srn=srn;
        this.alloted_to=alloted_to;
    }
}