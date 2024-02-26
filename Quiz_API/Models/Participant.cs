namespace Quiz_API.Models
{
    public class Participant
    {
        public int ParticipantId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public int Score { get; set; }
        public int TimeTaken { get; set; }
    }
}
