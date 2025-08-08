using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthzController : ControllerBase
    {
        [HttpGet("/healthz")]
        public IActionResult Health() => Ok("Healthy");
    }
}
