using Microsoft.AspNetCore.Mvc;
using NewWebSite.Models;

namespace NewWebSite.Controllers
{
    public class StartController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Start/Index.cshtml");
        }
        public IActionResult Vvedenie()
        {
            return View("~/Views/Start/Vvedenie.cshtml");
        }
        public IActionResult Canvas()
        {
            return View("~/Views/Start/Canvas.cshtml");
        }
        public IActionResult Life()
        {
            return View("~/Views/Start/Life.cshtml");
        }
        public IActionResult HeadHunter()
        {
            return View("~/Views/Start/HH.cshtml");
        }

        public IActionResult ContactUs()
        {
            return View("~/Views/Start/Contact.cshtml");
        }

        [HttpPost]
        public IActionResult ContactUs(SMail sendmail)
        {
            if (string.IsNullOrEmpty(sendmail.Email))
            {
                ModelState.AddModelError("Email", "Введите адрес эл.почты");
            }
            if (!IsValidEmail(sendmail.Email))
            {
                ModelState.AddModelError("Email", "Некорректный адрес эл.почты");
            }
            if (sendmail.Subject.Length > 50)
            {
                ModelState.AddModelError("Subject", "Максимум 50 символов");
            }
            if (string.IsNullOrEmpty(sendmail.Text))
            {
                ModelState.AddModelError("Text", "Напишите текст");
            }
            if (sendmail.Text.Length > 2000)
            {
                ModelState.AddModelError("Subject", "Максимум 2000 символов");
            }
            if (ModelState.IsValid)
            {
                SendMail.SendMail.Send(sendmail.Email, sendmail.Subject, sendmail.Text);
                return RedirectToAction("ContactUs");
            }
            return View("~/Views/Start/Contact.cshtml", sendmail);
        }
        bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
