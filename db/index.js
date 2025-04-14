const data = {
    usuario : {
        id: 1,
        nombre: "Martina Serra",
        email: "martina.serra@gmail.com",
        fotoPerfil: "/images/users/rosa.png",  //agregar una foto de perfil
    },

    productos: [{
        id: 1,
        nombre: "Ford Fiesta",
        imagen: "/images/products/autos/images-Fordfiesta.jpeg",
        descripcion: "El Ford Fiesta es un auto compacto de Ford, ideal para ciudad por su tamaño, bajo consumo y fácil manejo. Destaca por su diseño moderno y buena relación precio-calidad.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 2,
        nombre: "Volkswagen Scirocco",
        imagen: "/images/products/autos/imagen-scirocco.jpeg",
        descripcion: "El Volkswagen Scirocco es un coupé deportivo compacto de diseño elegante y estilo agresivo. Combina buen rendimiento con un perfil bajo y aerodinámico, ideal para quienes buscan deportividad sin perder comodidad.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 3,
        nombre: "Volkswagen Gol",
        imagen: "/images/products/autos/Imagen-Gol.jpeg",
        descripcion: "El Volkswagen Gol es un auto compacto y confiable, muy popular en América Latina por su bajo consumo, mantenimiento sencillo y buena durabilidad. Ideal para uso urbano y cotidiano.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 4,
        nombre: "Volkswagen Vento",
        imagen: "/images/products/autos/imagen-vento.jpeg",
        descripcion: "El Volkswagen Vento es un sedán de gama media que combina confort, buen equipamiento y rendimiento. Destaca por su diseño elegante, tecnología moderna y excelente desempeño en ruta.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 6, 
        nombre: "Audi TT",
        imagen: "/images/products/autos/imagen-audiTT.avif",
        descripcion: "El Audi TT es un coupé deportivo compacto, conocido por su diseño moderno, su estilo elegante y su excelente desempeño. Combina potencia, tecnología y tracción quattro para una experiencia de conducción dinámica.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 7,
        nombre: "Chevrolet Camaro",
        imagen: "/images/products/autos/imagen-camaro.avif",
        descripcion: "Chevrolet Camaro es un muscle car icónico, con diseño agresivo y gran potencia. Representa el espíritu deportivo estadounidense, combinando alto rendimiento con un estilo llamativo",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 8,
        nombre: "Chevrolet Onix",
        imagen: "/images/products/autos/imagen-onix.jpeg",
        descripcion: "El Chevrolet Onix es un hatchback compacto, económico y moderno. Destaca por su bajo consumo, buen equipamiento tecnológico y excelente relación precio-calidad, ideal para la ciudad.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    },
    {
        id: 9,
        nombre: "Nissan Sentra",
        imagen: "/images/products/autos/imagen-sentra.jpeg",
        descripcion: "El Nissan Sentra es un sedán compacto que ofrece buen confort, diseño elegante y eficiencia en el consumo. Es una opción confiable para quienes buscan comodidad y rendimiento en el día a día.",
        comentarios: [
            {
                nombre: "Sofia Keser", 
                img: "/images/users/verde.jpg",
                comentario: "Muy buen auto! calidad al 100%"
            },
            {
                nombre: "Victoria Zanardi", 
                img: "/images/users/celeste.avif",
                comentario: "Es una maquina!!!"
            },
            {
                nombre: "Agostina Ciafardini", 
                img: "/images/users/piel.png",
                comentario: "Servicio al cliente excelente, cumplen con lo que dicen"
            },
            {
                nombre: "Amapro Ricotta", 
                img: "/images/users/rosa.png",
                comentario: "Entrega en timepo y forma, muy buena atencion, excelente calidad"
            },
            {
                nombre: "Lourdes Tamborenea", 
                img: "/images/users/violeta.jpg",
                comentario: "Es expectacular!"
            }
        ]
    }],
    
}


module.exports = data
