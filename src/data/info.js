const data = [
	{
		cityName: "Lima",
		tours: [
			{
				tourName: "Lima City Tour",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Mañana y Noche",
				duration: "4 Horas",
				minimumPassegensers: 4,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Lima Fountains",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Martes - Domingo",
				duration: "3 Horas",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Dinner Show",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Todos los dias - 19:00",
				duration: "",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Pachacamac Adoratory",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Martes - Jueves - Viernes - Sabado",
				duration: "3.5 Horas",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Sacred City of Caral",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Peruvian Paso Horse",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Sabados y Domingos",
				duration: "4.5 Horas",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Gastronomical City Tour",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Todos los dias",
				duration: "3.5 Horas",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Mountains Close Lima",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Todos los dias",
				duration: "Full Day / 05:00 - 19:30",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Larco Museum",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Todos los dias",
				duration: "3.5 Horas",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Gold Museum",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Todos los dias",
				duration: "3.5 Horas",
				minimumPassegensers: 2,
				idiomas: "Ingles & Español",
			},
		],
	},

	{
		cityName: "Ica",
		tours: [
			{
				tourName: "Paracas & Ica",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Mañana y Noche",
				duration: "4 Horas",
				minimumPassegensers: "Rates per Person in US Dollars",
				idiomas: "Ingles & Español",
			},
		],
	},

	{
		cityName: "Cusco",
		tours: [
			{
				tourName: "Cusco City Tour Daily AM",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Sacred Valley Daily",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Machupicchu Daily Full Day",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Rainbow Mountain Daily",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Inca Bridge Q'eswachaka  Daily",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Seven Lagoons Ausangate Mountains Daily F/D",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Humantay Lagoon Daily",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "05:00 - 17:00",
				duration: "Full Day",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Maras Moray Daily",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "08:00 - 13:00",
				duration: "Full Day",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Super Sacred Valley Daily",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "06:30 - 18:00",
				duration: "Full Day",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Puno",
		tours: [
			{
				tourName: "Puno: Uros & Taquile Islands",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Iquitos",
		tours: [
			{
				tourName: "Iquitos Full Day or 3d/2n",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "",
				duration: "",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Puerto Maldonado",
		tours: [
			{
				tourName: "Manu & Tambopata Nationals",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "4d/3n",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Trujillo & Chiclayo",
		tours: [
			{
				tourName: "Trujillo & Chiclayo",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "4d/3n",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Arequipa",
		tours: [
			{
				tourName: "Arequipa & Colca Canion 2d/1n",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "4d/3n",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Huaraz",
		tours: [
			{
				tourName: "Llanganuco F/D Tour",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "08:00 - 18:30",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Laguna 69",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "08:00 - 18:30",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Chavin Ruins",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "09:00 - 18:30",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Laguna Paron",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "09:00 - 18:30",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
	{
		cityName: "Bolivia",
		tours: [
			{
				tourName: "La Paz City Tour",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "3 Horas",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Tiwanaku Tour",
				tourImg: [],
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "08:00 - 18:30",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
			{
				tourName: "Salar de Uyuni",
				tourImg: "",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",
				departures: "Everyday",
				duration: "Full Day",
				minimumPassegensers: 1,
				idiomas: "Ingles & Español",
			},
		],
	},
];
