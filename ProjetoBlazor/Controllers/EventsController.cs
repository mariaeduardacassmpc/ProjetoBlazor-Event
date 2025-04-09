using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ProjetoBlazor.Data;
using ProjetoBlazor.Models;
using ProjetoBlazor.DTO;

namespace ProjetoBlazor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public EventsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEvents()
        {
            var events = _context.Events.OrderByDescending(e => e.Id).ToList();
            return Ok(events);
        }

        [HttpGet("{id}")]
        public IActionResult GetEvents(int id)
        {
            var evento = _context.Events.Find(id);
            if(evento == null)
            {
                return NotFound();
            }
            return Ok(evento);
        }

        [HttpPost]
        public IActionResult CreateEvent(EventDTO eventDTO)
        {
            var evento = new Event
            {
                Title = eventDTO.Title,
                Description = eventDTO.Description,
                StartDate = eventDTO.StartDate,
                EndDate = eventDTO.EndDate,
                AllDay = eventDTO.AllDay,
                CreatedAt = DateTime.Now
            };

            _context.Events.Add(evento);
            _context.SaveChanges(); 

            return Ok(evento);
        }

        [HttpPut("{id}")]
        public IActionResult EditEvent(int id, EventDTO eventDTO)
        {
            var evento = _context.Events.Find(id);
            if(evento == null) return NotFound();
            
            evento.Title = eventDTO.Title;
            evento.Description = eventDTO.Description;  
            evento.StartDate = eventDTO.StartDate;
            evento.EndDate = eventDTO.EndDate;  
            evento.AllDay = eventDTO.AllDay;        

            _context.SaveChanges();
            return Ok(evento);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEvent(int id)
        {
            var evento = _context.Events.Find(id);
            if (evento == null) return NotFound();

            _context.Events.Remove(evento);
            _context.SaveChanges();

            return Ok(evento);
        }
    }
}
