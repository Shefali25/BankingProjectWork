using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Banking_Case_Study.Models;

namespace Banking_Case_Study.Controllers
{
    public class TransactionsController : ApiController
    {
        private BankingEntities db = new BankingEntities();

        // GET: api/Transactions
        public IQueryable<Transaction> GetTransactions()
        {
            return db.Transactions;
        }

        // GET: api/Transactions/5
        [ResponseType(typeof(Transaction))]
        public IHttpActionResult GetTransaction(int id)
        {
            Transaction transaction = db.Transactions.Find(id);
            if (transaction == null)
            {
                return NotFound();
            }

            return Ok(transaction);
        }

        // PUT: api/Transactions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTransaction(int id, Transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != transaction.reference_id)
            {
                return BadRequest();
            }

            db.Entry(transaction).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Transactions
        [ResponseType(typeof(Transaction))]
        public IHttpActionResult PostTransaction(Transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Transactions.Add(transaction);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = transaction.reference_id }, transaction);
        }
        [Route("api/Transactions/getBeneficiaries")]
        [HttpPost]
        public List<long> GetBeneficiaries(long account_number)
        {
            List<long> Beneficiaries = db.Beneficiaries.Where(b => b.account_number == account_number).Select(b => b.b_account_number).ToList();

            return Beneficiaries;
        }

        [Route("api/CheckTransactionPassword")]
        [HttpPost]
        public IHttpActionResult CheckTransactionPassword(long account_number,string transaction_password)
        {
            string password = db.AccountHolders.Where(a => a.account_number == account_number).Select(a => a.transaction_password).ToList()[0];
            if(password==transaction_password)
            {
               return Ok("Correct Password");
            }
            else
            {
               return Ok("Error");
            }
        }

        [Route("api/UpdateCurrentBalance")]
        [HttpPut]
        public void put(long from_account_number,long to_account_number,int debit,[FromBody]AccountDetail accountDetail)
        {
            accountDetail = (from p in db.AccountDetails
                             where p.account_number == from_account_number
                             select p).SingleOrDefault();
            accountDetail.current_balance -= debit;
            accountDetail = (from p in db.AccountDetails
                             where p.account_number == to_account_number
                             select p).SingleOrDefault();
            accountDetail.current_balance += debit;
            db.SaveChanges();
        }

        // DELETE: api/Transactions/5
        [ResponseType(typeof(Transaction))]
        public IHttpActionResult DeleteTransaction(int id)
        {
            Transaction transaction = db.Transactions.Find(id);
            if (transaction == null)
            {
                return NotFound();
            }

            db.Transactions.Remove(transaction);
            db.SaveChanges();

            return Ok(transaction);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TransactionExists(int id)
        {
            return db.Transactions.Count(e => e.reference_id == id) > 0;
        }


    }
}