using System;
using System.Collections.Generic;

namespace MyAppASP.Models
{
    public partial class WeatherForecast
    {
        public string DateFormatted { get; set; }
        public int TemperatureC { get; set; }
        public int TemperatureF { get; set; }
        public string Summary { get; set; }
    }
}
