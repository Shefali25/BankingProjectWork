import{HttpClient, HttpClientModule}from '@angular/common/http';
import{Injectable}from '@angular/core';
import{HttpHeaders} from '@angular/common/http';
import {NgForm}from '@angular/forms';

@Injectable()
export class CustomerDetailService
{
    header:any;
    constructor(private http:HttpClient,private http1:HttpClient,private http2:HttpClient)
    {
        const headerSettings:{[name:string]:string|string[];}={};
        this.header=new HttpHeaders(headerSettings);
    }
    getCustDetails()
    {
        //debugger;
        return this.http.get("https://localhost:44303/api/pendingapprovallist");
    }
    getAllotedCustDetails()
    {
        return this.http1.get("https://localhost:44303/api/alloted/10672240");
    }

    AllotToMe(cust_id:number,admin_id:number)
    {
        const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
        return this.http2.put<any>("https://localhost:44303/api/put?cust_id="+cust_id+"&allotted_to="+admin_id,httpOptions);
    }
    
}