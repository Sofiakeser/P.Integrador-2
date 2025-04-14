create schema dbPI;
use dbPI;
create table tabla_de_usuarios (
	id int unsigned primary key auto_increment,
	email varchar(50) not null,
	contra varchar(20) not null,
	fecha date not null,
	cliente_id int unsigned,
	foto_perfil text,

	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );

/*Fijarse las FK*/

create table tabla_de_productos (
	id int unsigned primary key auto_increment,
	usuario int not null, /*preguntar este*/
	imagen_producto text not null,
	nombre varchar(50),
	descripcion varchar(500) not null,
	
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );
    
create table tabla_de_comentarios (
	id int unsigned primary key auto_increment,
	id_post int not null,
	id_usuario int not null,
	comentario varchar(500) not null,
		
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );

/* insertar al menos 5 usuarios, 10 posteos y 3 comentarios para cada post. Podrán usar los datos creados en el módulo de datos del punto 2.*/

insert into tabla_de_usuario (id, email, contra, fecha,	cliente_id,	foto_perfil)
    values (default )

    
    


