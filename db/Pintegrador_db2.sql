create schema dbPI;
use dbPI;
create table usuarios (
	id int unsigned primary key auto_increment,
	usuario varchar(20) not null,
	email varchar(50) not null unique,
	contra varchar(500) not null,
	fecha date not null,
	dni int unsigned,
	foto_perfil text,

	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );

/*Fijarse las FK*/

create table productos (
	id int unsigned primary key auto_increment,
	usuario_id int unsigned not null, /*preguntar este*/
	imagen_producto text not null,
	nombre varchar(50),
	descripcion varchar(500) not null,

	FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );
    
create table comentarios (
	id int unsigned primary key auto_increment,
	post_id int unsigned not null,
	usuario_id int unsigned not null,
	comentario varchar(500) not null,

	FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	FOREIGN KEY (post_id) REFERENCES productos(id),
		
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );

insert into usuarios (usuario, email, contra, fecha, dni, foto_perfil)
    values ("Sofia Keser","sofikeser@gmail.com", "sofipro", "2005-08-30", "46956160", "https://img.freepik.com/fotos-premium/textura-papel-rosa-profundo-vertical-motas-ruido_469558-42157.jpg?semt=ais_hybrid&w=740"), ("Martina Serra","martina.serra@gmail.com", "martucrack", "2005-11-02", "47153710", "https://coloresypunto.wordpress.com/wp-content/uploads/2013/06/colores_y_punto_verde_esmeralda.jpg"), 
	("Victoria Zanardi","victoria.zanardi@gmail.com", "vicu123", "2006-04-06", "47206156", "https://thumbs.dreamstime.com/b/color-violeta-suave-textura-de-fondo-con-púrpura-para-banner-o-web-un-solo-162428550.jpg"), ("Lourdes Tamborenea","lolo.tambo@gmail.com", "tambor", "2005-07-05", "46853421", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aaCEN6hLZq0-ELEBIlPU7JQq1oFZFHjB9w&s"), 
	("Amparo Ricotta","amparoricotta@gmail.com", "audibb", "2006-01-07", "47153690", "https://distribuidorlacolo.com.ar/wp-content/uploads/download-9.png
");

insert into productos (usuario_id, imagen_producto, nombre, descripcion) 
    values (1, "https://assets.volkswagen.com/is/image/volkswagenag/Volkswagen-T-Cross-Edition?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA==", "Volkswagen Tcross", "Volkswagen T-Cross en excelente estado, modelo 2021, único dueño."), 
	(2, "https://www.jeep.es/content/dam/jeep/crossmarket/renegade-my-23/ice/overview/trim/limited/jeep_renegade_eHybrid_limited_alpine_white_565x330.png", "Jeep Renegade", "Jeep Renegade 2019, perfecta para ciudad, detalles estéticos menores."), 
	(3, "https://www.megautos.com/wp-content/uploads/2017/04/Citroen-C3-blanco-delantera.jpg", "Citroen C3", "Citroen C3, modelo 2012, muy económico y cómodo."), 
	(4, "https://http2.mlstatic.com/D_NQ_NP_725401-MLA42364401121_062020-O.webp", "Amarok", "La Volkswagen Amarok es una pickup robusta y versátil, ideal tanto para el trabajo como para el uso diario. Se destaca por su potencia, confort interior y buen rendimiento en todo tipo de terrenos."), 
	(5, "https://mycaready.com/wp-content/uploads/2023/09/mcr-audi-a1-sportback-negro.png", "Audi A1", "Audi A1 modelo 2016, excelente estado, servicios al día, único dueño."), 
	(1, "https://cdcssl.ibsrv.net/autodata/images/?img=CAD50AUC152A021001.jpg&width=382", "Audi A3", "Audi A3 Sportback 2017, impecable, papeles al día, 80.000km."), 
	(2, "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JiN10tLhu1XzWVo7puMLWFmdkAj5DOPiQO%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snpq6v6ODubLz2aKqfiY7jmB2fJj5DOP5Eagd%25kcWExHWpbl8FO2k3Hy2o24BdzTQBrXpFpfOlZ24riI1pascpF4HvHnR0KiIFJG89OABHvIT9PtOO2JGvloMUegpT9GsLD6jUilo90yYw2bHsLoACR1%25hJ0yLOEx%25dqTACygNWU3mlOECUkegL7sgNEbn%25Rp10UkNh5uqzVAbnkq83nCzOh5nmPX5tagq857MrHbRUmP81D4kxxb7MPVYFleWh1DMztIc0eqVYDafv3ijmztYRSGjM67aftxd9Iiw1RSfWQtSq%25VxdSeZfdAuzWQdjcSKX3aeZQ6KdviXRjcZwBQGVrx6Kc%252Z9%254WwBKupcowFe%252B3iKLkIjup2XHBypv63iprJ2xrGwXHi4TpWI9%25rJHFlEt2ou4TJIsNxyL3FlTv0knGyXIslGAn5uCrv0s9O58dE4GA0og8P5NF9OALUPMCkIogOybMD8nvLUgChDWP5GybUEqYeX89ChbNmt1aPoEqhk7f%256MLNmqn1Scmt0KiIFJGb7OABHvIT9hu40W0JdKX324BypTQLXg7AF3D%25zhrLGwg6QuiVpRBn5Y3", "BMW Serie 3", "BMW 320i modelo 2015, motor turbo, caja automática, muy buen estado."), 
	(3, "https://di-uploads-pod36.dealerinspire.com/lexusofnorthmiami/uploads/2024/01/NX-350h-AWD.webp", "Lexus NX", "Lexus NX 2021, ofrece confort, buen rendimiento y diseño moderno, ideal para ciudad y viajes."), 
	(4, "https://cuyomotor.com.ar/wp-content/uploads/2024/06/Peugeot-208-2025.jpg", "Peugeot 208", "Peugeot 208 2022, motor 1.6, ideal para el día a día, con un diseño deportivo."), 
	(5, "https://www.ford.es/content/dam/guxeu/rhd/central/cars/2021-focus/dse/column-cards/ford-focus-eu-Column_Card_Focus-ST-Line-X-3x2-1000x667-front-view.jpg", "Ford Focus", "Ford Focus 2016, full full, pantalla táctil, cámara de retroceso, muy bien cuidado.");

insert into comentarios (post_id, usuario_id, comentario) -- chequear la repeticion de numero en la segunda columna 
	values (1, 1, "Me interesa el auto, ¿tiene algún detalle?"), 
	(1, 2, "Hola, ¿es negociable el precio?"), 
	(1, 3, "¿Tenés más fotos del interior?"), 
	(2, 4, "¿Está en garantía?"), 
	(2, 5, "¿Por qué lo vendés?"), 
	(2, 1, "¿Tenés factura de compra?"), 
	(3, 1, "¿Cuántos dueños tuvo?"), 
	(3, 2, "¿Aceptás permuta?"), 
	(3, 3, "¿Tenés el manual de usuario?"), 
	(4, 4, "¿Está al día con los impuestos?"), 
	(4, 5, "¿Tenés el service al día?"), 
	(4, 1, "¿Es automático o manual?"), 
	(5, 1, "¿Tenés alguna oferta en mente?"), 
	(5, 2, "¿Cuántos kilómetros tiene?"), 
	(5, 3, "¿Tenés algún problema mecánico?"), 
	(6, 4, "¿Está asegurado?"), 
	(6, 5, "¿Tenés el título de propiedad?"), 
	(6, 1, "¿Tenés alguna oferta en mente?"), 
	(7, 2, "¿Está en garantía?"), 
	(7, 3, "¿Tenés factura de compra?"),
	(7, 4, "¿Tenés el manual de usuario?"), 
	(8, 5, "¿Está al día con los impuestos?"), 
	(8, 1, "¿Tenés el service al día?"), 
	(8, 2, "¿Es automático o manual?"), 
	(9, 3, "¿Tenés alguna oferta en mente?"), 
	(9, 4, "¿Cuántos kilómetros tiene?"), 
	(9, 5, "¿Tenés algún problema mecánico?"), 
	(10, 1, "¿Está asegurado?"), 
	(10, 2, "¿Tenés el título de propiedad?"), 
	(10, 3, "¿Tenés alguna oferta en mente?");