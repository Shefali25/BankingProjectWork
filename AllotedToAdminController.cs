using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Banking_Case_Study.Models;

namespace Banking_Case_Study.Controllers
{
    public class AllotedToAdminController : ApiController
    {

        BankingEntities db = new BankingEntities();
        [Route("api/alloted/{admin_id}")]
        public IEnumerable<CustomerDetail> Get(int admin_id)
        {
            List<CustomerDetail> allottedlist = db.Approvals.Where(c => c.alloted_to == admin_id).Select(c => c.CustomerDetail).ToList();
            return allottedlist;
        }
    }
}



