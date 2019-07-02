using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CrudDemo.Models
{
    public class CrudContext : DbContext
    {
        public DbSet<Player> Players { get; set; }
    }
}