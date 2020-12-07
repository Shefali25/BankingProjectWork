import{HttpClient, HttpClientModule}from '@angular/common/http';
import{Injectable}from '@angular/core';
import{HttpHeaders} from '@angular/common/http';
import {NgForm}from '@angular/forms';

@Injectable()
export class BeneficiaryService
{
    header:any;
    constructor(private http:HttpClient,private http1:HttpClient)
    {
        const headerSettings:{[name:string]:string|string[];}={};
        this.header=new HttpHeaders(headerSettings);
    }
    getBeneficiaryName(b_account_number:string)
        {
            const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
            return this.http.post<any>("https://localhost:44303/api/beneficiary/"+b_account_number,httpOptions);
        }

        AddBenefeciaries(Beneficiary:any)
        {
            const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
            return this.http.post<any>("https://localhost:44303/api/addbeneficiary/",Beneficiary,httpOptions);
        }

}