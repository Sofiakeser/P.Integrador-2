create schema dbPI;
use dbPI;
create table usuarios (
	id int unsigned primary key auto_increment,
	email varchar(50) not null,
	contra varchar(20) not null,
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
	usuario int not null, /*preguntar este*/
	imagen_producto text not null,
	nombre varchar(50),
	descripcion varchar(500) not null,

	FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
	
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );
    
create table comentarios (
	id int unsigned primary key auto_increment,
	post_id int not null,
	usuario_id int not null,
	comentario varchar(500) not null,

	FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
	FOREIGN KEY (post_id) REFERENCES productos(id)
		
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
	f
    );

insert into usuario (email, contra, fecha, dni, foto_perfil)
    values ('sofikeser@gmail.com', "sofipro", "2005-08-30", "46956160"), ('martina.serra@gmail.com', "martucrack", "2005-11-02", "47153710"), 
	('victoria.zanardi@gmail.com', "vicu123", "2006-04-06", "47206156"), ('lolo.tambo@gmail.com', "tambor", "2005-07-05", "46853421"), 
	('amparoricotta@gmail.com', "audibb", "2006-01-07", "47153690")

insert into productos (usuario, imagen_producto, nombre, descripcion)
    values ('Sofikekeser', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.1&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ8QweV1ixhtPZj3VOxDTHuOZoWkBP9s8B4NTRBk35YQ8FUsRvdhFO07k5N2XGh9cwqZIVXDreyMPpS5A1u5o4jZEQQxHNg6_sRCiwRO7SWw_PYiOcoiD3Na3Fg&disp=emb&realattid=ii_m9h7efp20&zw", "Vendo Volkswagen Tcross", "Volkswagen T-Cross en excelente estado, modelo 2021, único dueño."), 
	('Martina Serra', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.2&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ8MOGSR15mRa6pnl2C6-i47Umo2T22R4VQII55Tj8Qihu9VtCn7rLhI9b3Qwdru9lzrSwQbXXg3ZxAeG7f2W-nQYacsJuLlumerO4-eqBi_vTV4Z4QsPfAJo6k&disp=emb&realattid=ii_m9h7ewxs1&zw", "Jeep Renegade 2019", "Jeep Renegade, perfecta para ciudad, detalles estéticos menores."), 
	('Victoria Zanardi', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.3&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ-fss7Dyu1vyC0nOJJbhcXSWc-23XwHh_4wAtQvjwyqGVs15Rq_0M79DRULpIXTrmmJsCz1ILaU82sgQG-IHzoRPG1WxBk_OlDEnACEa6YYH_PjXCmhZv_ztkA&disp=emb&realattid=ii_m9h7glfw2&zw", "Citroen C3", "Citroen C3, modelo 2012, muy económico y cómodo."), 
	('lourdes Tambo@gmail.com', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.4&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ-DyxW7P_g9uGntkNp_FURk-KhSl4XYa0OElp4STLDUloBxaQPGqaRGSV6ofoSMWMVErk42RIx1F8m7AzGQ3HfjEk255MJ_MyIpj8FBvNNXu9qyJBPuab6T1HE&disp=emb&realattid=ii_m9h7hjkq3&zw", "Renault Clio", "Renault Clio 2005, motor 1.2, bajo consumo, ideal primer auto."), 
	('Amparo Ricotta', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.5&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ9TE-FKIibB5gBc9nPahiJjsOUwqyYo-ujWqxyALn_FBpYOSTrRhRtL8HOFZi2bCvhw9k9Ij0cTiaH2xFlqk2ue4nBLtRhA2D9kvEEFMVws_5Whw4eUCtdT3Qk&disp=emb&realattid=ii_m9h7i8g74&zw", "Audi A1", "Audi A1 modelo 2016, excelente estado, servicios al día, único dueño."), 
	('Agostina Ciafardini', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.7&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ85c0aPwYSm7_WDUhQWIXhM6ZY4euciBF1pmWlAL-b0g6R_TShp1qaO_F_xs5UGFx0EF_8W-h-304vZiwX7Q2poN346gAuU5qxhcqb8KeNEMef56MuiMEDL4mE&disp=emb&realattid=ii_m9h7kgrh6&zw", "Audi A3", "Audi A3 Sportback 2017, impecable, papeles al día, 80.000km."), 
	('Jorge Rampoldi', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.6&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ8tYS4LWh8xu3setZN6PGeosgCKFKH2VTY9ADXmtevGufjlRzdV9C8y4rHb-d4ds6y_IB9bvUwpkn8aJR0JyPVBHnwCRYdloaDggnF841-3EIpTEJ6fA_lxYc0&disp=emb&realattid=ii_m9h7j9115&zw", "BMW Serie 3", "BMW 320i modelo 2015, motor turbo, caja automática, muy buen estado."), 
	('juan Pedro Rodriguez', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.8&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ_ElpKkBucLW-_npCItp6NlZIW6r72Sv6Cyd-XEIY_qRahiHQYc2ae5lQ19xGMTVEFXVOKQhXLHa8XOy4OJKBSa_zHUBlIw5KaVcBkI0Ze6mbfZREeXrDWG78Y&disp=emb&realattid=ii_m9h7kw3t7&zw", "Fiat Punto", "Fiat Punto 2014, motor 1.6, económico y confortable, sin detalles."), 
	('Isak Newtonick', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.9&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ_s4Wb5HGJinXAARQfEwiq8Wl3w870KWsoW1Dmw_UibGCcR0GPRKyLKDoh6DDZtXeKaZHtITrHya6-QBhqLtG7DQx9VrZOLp9haNGJX2nKGcSoqzXmQU4q-4xk&disp=emb&realattid=ii_m9h7lh678&zw", "Chevrolet Corsa", "Chevrolet Corsa Classic 2012, motor 1.4, ideal para el día a día."), 
	('Rolando Ronaldo', "https://mail.google.com/mail/u/0?ui=2&ik=574f8b3854&attid=0.10&permmsgid=msg-f:1829391172321121354&th=19634d94256f944a&view=fimg&fur=ip&permmsgid=msg-f:1829391172321121354&sz=s0-l75-ft&attbid=ANGjdJ8e2A9BLZZQso5TNSTg3r29sg-MjugT7Co1qrc3v_wpvedtXQZ4pkn4Q0YFpd-WJrL0vKW8RFAJ5q-gHUOoNzV_1cL5MG7i3LFK7BRAeOYoGCrIhvYIQTlHuHg&disp=emb&realattid=ii_m9h7lxqw9&zw", "Ford Focus", "Ford Focus 2016, full full, pantalla táctil, cámara de retroceso, muy bien cuidado.")

insert into comentarios (post_id, usuario_id, comentario)
	values (1, 1, "Me interesa el auto, ¿tiene algún detalle?"), 
	(1, 2, "Hola, ¿es negociable el precio?"), 
	(1, 3, "¿Tenés más fotos del interior?"), 
	(2, 4, "¿Está en garantía?"), 
	(2, 5, "¿Por qué lo vendés?"), 
	(2, 6, "¿Tenés factura de compra?"), 
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
	(7, 3, "¿Tenés factura de compra?")
	(7, 4, "¿Tenés el manual de usuario?"), 
	(8, 5, "¿Está al día con los impuestos?"), 
	(8, 1, "¿Tenés el service al día?"), 
	(8, 2, "¿Es automático o manual?"), 
	(9, 3, "¿Tenés alguna oferta en mente?"), 
	(9, 4, "¿Cuántos kilómetros tiene?"), 
	(9, 5, "¿Tenés algún problema mecánico?"), 
	(10, 1, "¿Está asegurado?"), 
	(10, 2, "¿Tenés el título de propiedad?"), 
	(10, 3, "¿Tenés alguna oferta en mente?")