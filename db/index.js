const data = {
    usuario : {
        id: 1,
        nombre: "Martina Serra",
        email: "martina.serra@gmail.com",
        fotoPerfil: "/images/users/default-image.png",  //agregar una foto de perfil
    },

    productos:[{
        id: 1,
        nombre: "Ford Fiesta",
        marca: "Ford",
        modelo: "Fiesta",
        precio: 200000,
        imagen: "", //agregar foto auto
        descripcion: "Un auto compacto y eficiente.",
    },
    {
        id: 2,
        nombre: "Toyota Corolla",
        marca: "Toyota",
        modelo: "Corolla",
        precio: 250000,
        imagen: "", //agregar foto auto
        descripcion: "Un sedán confiable y cómodo.",
    },
    {
        id: 3,
        nombre: "Chevrolet Tracker",
        marca: "Chevrolet",
        modelo: "Tracker",
        precio: 300000,
        imagen: "", //agregar foto auto
        descripcion: "Un SUV versátil y espacioso.",
    }
    ]}


module.exports = data
