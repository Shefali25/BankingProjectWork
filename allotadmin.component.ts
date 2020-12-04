import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../Service/customerDetailService';

@Component({
  selector: 'app-allotadmin',
  templateUrl: './allotadmin.component.html',
  styleUrls: ['./allotadmin.component.css']
})
export class AllotadminComponent implements OnInit {
  custalloted:any=[];
  constructor(private customerdetailservice:CustomerDetailService) { }

  ngOnInit(): void {
    this.fetchCustDetails();
  }

  fetchCustDetails()
  {
    this.custalloted=this.customerdetailservice.getAllotedCustDetails().subscribe((data)=>
    {this.custalloted=data})
  }
}
