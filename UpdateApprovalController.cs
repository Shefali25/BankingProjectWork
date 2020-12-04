using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Banking_Case_Study.Models;

namespace Banking_Case_Study.Controllers
{
    public class UpdateApprovalController : ApiController
    {
        BankingEntities db = new BankingEntities();

        [Route("api/put/")]
        public void Put(int allotted_to, int cust_id,[FromBody]Approval approval)
        {
            approval = (from p in db.Approvals
                             where p.cust_id == cust_id
                             select p).SingleOrDefault();
            approval.alloted_to=allotted_to;
            db.SaveChanges();
        }
    }
}
