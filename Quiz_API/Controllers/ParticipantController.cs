using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz_API.Models;
using System.Runtime.CompilerServices;

namespace Quiz_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

 
    public class ParticipantController : ControllerBase
    {
        private readonly QuizDBContext context;
        public  ParticipantController (QuizDBContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public async Task<ActionResult<Participant>> PostParticipant(Participant participant)
        {
            var temp = context.Participants.Where(x=>x.Name == participant.Name && x.Email == participant.Email)
            .FirstOrDefault();  

            if(temp == null)
            {
                context.Participants.Add(participant);
                await context.SaveChangesAsync();

            }
            else
            {
                participant = temp;
               
            }
            return Ok(participant);
        }

    }
}
