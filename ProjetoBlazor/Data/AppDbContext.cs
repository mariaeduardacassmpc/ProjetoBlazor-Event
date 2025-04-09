﻿using Microsoft.EntityFrameworkCore;
using ProjetoBlazor.Models;

namespace ProjetoBlazor.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Event> Events { get; set; }
    }
}
