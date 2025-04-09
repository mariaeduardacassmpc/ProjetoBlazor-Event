using System.ComponentModel.DataAnnotations;

namespace ProjetoBlazor.DTO
{
    public class EventDTO
    {
        [Required(ErrorMessage = "O título é obrigatório.")]
        public string Title { get; set; }
        [MaxLength(500, ErrorMessage = "O campo descrição comporta apenas 500 caracteres.")]
        public string Description { get; set; }
        [Required(ErrorMessage = "A data inicio é obrigatória.")]
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public bool AllDay { get; set; } = false;
    }
}
