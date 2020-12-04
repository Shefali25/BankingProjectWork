import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from '../Model/customerDetail';
import { CustomerDetailService } from '../Service/customerDetailService';


@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.css']
})
export class PendinglistComponent implements OnInit {
custpending:any=[];
  constructor(private customerdetailservice:CustomerDetailService) { }


  ngOnInit(): void {
    this.fetchCustDetails();
  }

  fetchCustDetails()
  {
    this.custpending=this.customerdetailservice.getCustDetails().subscribe((data)=>
    {this.custpending=data})
  }
  AllotToMe(cust_id:number)
  {
    this.custpending=this.customerdetailservice.AllotToMe(cust_id,10672240).subscribe((data)=>
    {this.custpending=data})
  }
}
