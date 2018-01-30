using System.ComponentModel.DataAnnotations;

namespace NewWebSite.Models
{
    public class SMail
    {
        [Required(ErrorMessage = "Введите адрес эл.почты")]
        [EmailAddress(ErrorMessage = "Некорректный адрес эл.почты")]
        public string Email { get; set; }
        [StringLength(50, ErrorMessage = "Максимум 50 символов")]
        public string Subject { get; set; }

        [Required(ErrorMessage = "Напишите текст")]
        [StringLength(2000, ErrorMessage = "Максимум 2000 символов")]
        public string Text { get; set; }
    }
}

