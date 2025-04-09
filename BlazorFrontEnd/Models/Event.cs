﻿namespace BlazorFrontEnd.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool AllDay { get; set; } = false;
        public DateTime CreatedAt { get; set; }
    }
}
