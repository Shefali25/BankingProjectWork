import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
import { BeneficiaryService } from '../Service/beneficiaryService';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  form: FormGroup;
  account_number=51000000001;
  beneficiary:any={};
  b_account_number;
  message;
  final_b_account_number;
  valid=false;

  constructor(private beneficiaryservice:BeneficiaryService ) {
    this.form = new FormGroup({
      nickname: new FormControl(null, [])
    });
  }



  AddBeneficiary(beneficiary:any)
  {
    this.beneficiaryservice.AddBenefeciaries(beneficiary).subscribe(
      data=>{
        //debugger
        console.log(data)
      }
    )

  
  }
  

  BeneficiarySubmit() {
    if(this.form.valid)
    {
      this.beneficiary.account_number=this.account_number;
      this.beneficiary.b_account_number=this.final_b_account_number;
      this.beneficiary.nickname=this.form.value.nickname;
      this.AddBeneficiary(this.beneficiary);
      console.log(this.beneficiary);
    }
    else{
      console.log("Error");
    }
  }



Check()
{
  debugger
  this.beneficiaryservice.getBeneficiaryName(this.b_account_number).subscribe(
    data=>{
      if(data!="Incorrect Account number")
      {
        this.valid=true;
        this.final_b_account_number=this.b_account_number;
      }
      this.message=data
    }
  )
}


  ngOnInit(): void {
  }
}
