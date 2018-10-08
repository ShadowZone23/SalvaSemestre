
//1) Definir Las Variables Correspondintes
var opt_1 = new Array("-", "Arica", "Camarones", "General Lagos", "Putre");
var opt_2 = new Array("-", "Iquique", "Alto Hospicio", "Pozo Almonte", "Pica", "Huara", "Colchane", "Camiña");
var opt_3 = new Array("-", "Taltal", "Sierra Gorda", "Mejillones", "Antofagasta", "San Pedro de Atacama", "Ollagüe", "Calama", "Tocopilla", "María Elena");
var opt_4 = new Array("-", "Diego de Almagro", "Chañaral", "Tierra Amarilla", "Copiapó", "Caldera", "Vallenar", "Huasco", "Freirina", "Alto del Carmen");
var opt_5 = new Array("-", "Salamanca", "Los Vilos", "Illapel", "Canela", "Vicuña", "Paiguano", "La Serena", "La Higuera", "Coquimbo", "Andacollo", "Río Hurtado", "Punitaqui", "Ovalle", "Monte Patria", "Combarbalá");
var opt_6 = new Array("-", "Isla de Pascua", "San Esteban", "Rinconada", "Los Andes", "Calle Larga", "Villa Alemana", "Quilpué", "Limache", "Zapallar", "Petorca", "Papudo", "La Ligua", "Juan Fernández", "Cabildo", "Quillota", "Olmué", "Nogales", "La Cruz", "La Calera", "Hijuelas", "Santo Domingo", "San Antonio", "El Tabo", "El Quisco", "Cartagena", "Algarrobo", "Santa María", "San Felipe", "Putaendo", "Panquehue", "Llaillay", "Catemu", "Viña del Mar", "Valparaíso", "Quintero", "Puchuncaví", "Concón", "Casablanca");
var opt_7 = new Array("-", "San Vicente", "Requinoa", "Rengo", "Rancagua", "Quinta de Tilcoco", "Pichidegua", "Peumo", "Olivar", "Mostazal", "Malloa", "Machalí", "Las Cabras", "Graneros", "Doñihue", "Coltauco", "Coinco", "Codegua", "Pichilemu", "Paredones", "Navidad", "Marchihue", "Litueche", "La Estrella", "Santa Cruz", "San Fernando", "Pumanque", "Placilla", "Peralillo", "Palmilla", "Nancagua", "Lolol", "Chimbarongo", "Chépica");
var opt_8 = new Array("-", "Pelluhue", "Chanco", "Cauquenes", "Vichuquén", "Teño", "Sagrada Familia", "Romeral", "Rauco", "Molina", "Licantén", "Hualañé", "Curicó", "Yerbas Buenas", "Villa Alegre", "San Javier", "Retiro", "Parral", "Longaví", "Linares", "Colbún", "Talca", "San Rafael", "San Clemente", "Río Claro", "Pencahue", "Pelarco", "Maule", "Empedrado", "Curepto", "Constitución");
var opt_9 = new Array("-", "Talcahuano", "Concepción", "Los Angeles", "Chillán", "Coronel", "Hualpén", "Chiguayante", "San Pedro de la Paz", "Tomé", "San Carlos", "Lota", "Penco", "Arauco", "	Curanilahue", "Cañete", "Mulchén", "Nacimiento", "Cabrero", "Lebu", "Coihueco", "Laja", "Chillán Viejo", "Bulnes", "Yumbel", "Santa Bárbara", "Hualqui", "Los Álamos", "Yungay", "San Ignacio", "Coelemu", "Quillón", "El Carmen", "Tucapel", "	Santa Juana", "	Quirihue", "Ñiquén", "Quilleco", "Florida", "Pinto", "San Nicolás");
var opt_10 = new Array("-", "Villarrica", "Vilcún", "Toltén", "Teodoro Schmidt", "Temuco", "Saavedra", "Pucón", "Pitrufquén", "Perquenco", "Padre Las Casas", "Nueva Imperial", "Melipeuco", "Loncoche", "Lautaro", "Gorbea", "Galvarino", "Freire", "Curarrehue", "Cunco", "Cholchol", "Carahue", "Victoria", "Traiguén", "Renaico", "Purén", "Lumaco", "Los Sauces", "Lonquimay", "Ercilla", "Curacautín", "Collipulli", "Angol");
var opt_11 = new Array("-", "Río Bueno", "Lago Ranco", "La Unión", "Futrono", "Valdivia", "Panguipulli", "Paillaco", "San José de la Mariquina", "Máfil", "Los Lagos", "Lanco", "Corral");
var opt_12 = new Array("-", "Quinchao", "Quemchi", "Quellón", "Queilén", "Puqueldón", "Dalcahue", "Curaco de Vélez", "Chonchi", "Castro", "Ancud", "Puerto Varas", "Puerto Montt", "Maullín", "Los Muermos", "Llanquihue", "Frutillar", "Fresia", "Cochamó", "Calbuco", "San Pablo", "San Juan de la Costa", "Río Negro", "Puyehue", "Purranque", "Puerto Octay", "Osorno", "Palena", "Hualaihué", "Futaleufú", "Chaitén");
var opt_13 = new Array("-", "Guaitecas", "Cisnes", "Aisén", "Tortel", "O'Higgins", "Cochrane", "Lago Verde", "Coihaique", "Río Ibáñez", "Chile Chico");
var opt_14 = new Array("-", "Cabo de Hornos", "Antártica", "San Gregorio", "Río Verde", "Punta Arenas", "Laguna Blanca", "Timaukel", "Primavera", "Porvenir", "Torres del Paine", "Natales");
var opt_15 = new Array("-", "Puente Alto", "Maipú", "La Florida", "Las Condes", "San Bernardo", "Peñalolén", "Santiago", "Pudahuel", "La Pintana", "El Bosque", "Ñuñoa", "Cerro Navia", "Recoleta", "Renca", "Conchalí", "La Granja", "Estación Central", "Quilicura", "Providencia", "Pedro Aguirre Cerda", "Lo Espejo", "Macul", "Lo Prado", "Quinta Normal", "San Joaquín", "La Reina", "San Ramón", "Melipilla", "La Cisterna", "Vitacura", "San Miguel", "Colina", "Lo Barnechea", "Huechuraba", "Cerrillos", "Peñaflor", "Independencia", "Buin", "Talagante", "Paine");
// 2) crear una funcion que permita ejecutar el cambio dinamico

function cambia() {
    var cosa;
    //Se toma el vamor de la "cosa seleccionada"
    cosa = document.formulario_registro.cosa[document.formulario_registro.cosa.selectedIndex].value;
    //se chequea si la "cosa" esta definida
    if (cosa != 0) {
        //selecionamos las cosas Correctas
        mis_opts = eval("opt_" + cosa);
        //se calcula el numero de cosas
        num_opts = mis_opts.length;
        //marco el numero de opt en el select
        document.formulario_registro.opt.length = num_opts;
        //para cada opt del array, la pongo en el select
        for (i = 0; i < num_opts; i++) {
            document.formulario_registro.opt.options[i].value = mis_opts[i];
            document.formulario_registro.opt.options[i].text = mis_opts[i];
        }
    } else {
        //si no habia ninguna opt seleccionada, elimino las cosas del select
        document.formulario_registro.opt.length = 1;
        //ponemos un guion en la unica opt que he dejado
        document.formulario_registro.opt.options[0].value = "-";
        document.formulario_registro.opt.options[0].text = "-";
    }
    //hacer un reset de las opts
    document.formulario_registro.opt.options[0].selected = true;

}
