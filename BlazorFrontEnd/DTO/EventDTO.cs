using System.ComponentModel.DataAnnotations;

namespace BlazorFrontEnd.DTO
{
    public class EventDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool AllDay { get; set; } = false;
    }
}

