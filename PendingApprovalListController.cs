using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Banking_Case_Study.Models;

namespace Banking_Case_Study.Controllers
{
    public class PendingApprovalListController : ApiController
    {
        BankingEntities db = new BankingEntities();
        public IEnumerable<CustomerDetail> Get()
        {
            //List<CustomerDetail> pendinglist = db.CustomerDetails.Where(c => c.approval_status == "pending").ToList();
            List<CustomerDetail> pendinglist = db.Approvals.Where(c => c.alloted_to == null).Select(c => c.CustomerDetail).ToList();
            return pendinglist;
        }
    }
}
