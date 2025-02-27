﻿namespace UrbaniaBackend.Models
{
	public class Inmobiliaria
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Address { get; set; }
		public string Phone { get; set; }
		public string Email { get; set; }
		public List<Inmuebles> Inmuebles { get; set; } = new();
	}
}

