const data = {
    usuario : {
        id: 1,
        nombre: "Martina Serra",
        email: "martina.serra@gmail.com",
        fotoPerfil: "/images/users/default-image.png",  //agregar una foto de perfil
    },

    productos: [{
        id: 1,
        nombre: "Ford Fiesta",
        imagen: "https://www.google.com/imgres?q=ford%20fiesta%20venta&imgurl=https%3A%2F%2Facroadtrip.blob.core.windows.net%2Fpublicaciones-imagenes%2FSmall%2Fford%2Ffiesta%2Far%2FRT_PU_78cc53bb9ae94f7c876db464f4ff1794.webp&imgrefurl=https%3A%2F%2Fwww.autocosmos.com.ar%2Fauto%2Fusado%2Fford%2Ffiesta&docid=Gp-iL02Jkw9nNM&tbnid=zy1_K_ZDrmbpIM&vet=12ahUKEwioh5GR9NWMAxXyqJUCHbflLVEQM3oECGIQAA..i&w=480&h=270&hcb=2&ved=2ahUKEwioh5GR9NWMAxXyqJUCHbflLVEQM3oECGIQAA",
        descripcion: "El Ford Fiesta es un auto compacto de Ford, ideal para ciudad por su tamaño, bajo consumo y fácil manejo. Destaca por su diseño moderno y buena relación precio-calidad.",
    },
    {
        id: 2,
        nombre: "volkswagen scirocco",
        imagen: "https://www.google.com/imgres?q=scirocco%20venta&imgurl=https%3A%2F%2Fimg.linemedia.com%2Fimg%2Fs%2Fhatchback-Volkswagen-Scirocco---1704741387409374772_big--24010821162386440400.jpg&imgrefurl=https%3A%2F%2Fautoline.com.ar%2F-%2Fventa%2Fhatchbacks%2FVolkswagen%2FScirocco--24010821162386440400&docid=RVlVj0jwHIRFoM&tbnid=goTmxLf0BPHWRM&vet=12ahUKEwjWovbl89WMAxU4rZUCHe7DJ4QQM3oECFsQAA..i&w=800&h=450&hcb=2&ved=2ahUKEwjWovbl89WMAxU4rZUCHe7DJ4QQM3oECFsQAA",
        descripcion: "El Volkswagen Scirocco es un coupé deportivo compacto de diseño elegante y estilo agresivo. Combina buen rendimiento con un perfil bajo y aerodinámico, ideal para quienes buscan deportividad sin perder comodidad.",
    },
    {
        id: 3,
        nombre: "volkswagen gol",
        imagen: " https://www.google.com/imgres?q=gol%20venta&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_Q_NP_2X_761992-MLA83727747529_042025-T.webp&imgrefurl=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fgol-usado&docid=kR1yGwVoRfSimM&tbnid=TEkQ1DITfW0S4M&vet=12ahUKEwiR7r209NWMAxXbpZUCHSjYHbgQM3oECHMQAA..i&w=320&h=320&hcb=2&ved=2ahUKEwiR7r209NWMAxXbpZUCHSjYHbgQM3oECHMQAA",
        descripcion: "El Volkswagen Gol es un auto compacto y confiable, muy popular en América Latina por su bajo consumo, mantenimiento sencillo y buena durabilidad. Ideal para uso urbano y cotidiano.",
    },
    {
        id: 4,
        nombre: "volkswagen vento",
        imagen: "https://www.google.com/imgres?q=vento%20venta&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D3455160034470356797&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fsevendesoloclasificados%2Fp%2FC_zMcHmumjC%2F&docid=qa73tzw3LnFNXM&tbnid=LZPWCJwYPMtaSM&vet=12ahUKEwjYnJ3D9NWMAxUgq5UCHZTGOSEQM3oECFIQAA..i&w=1280&h=960&hcb=2&ved=2ahUKEwjYnJ3D9NWMAxUgq5UCHZTGOSEQM3oECFIQAA",
        descripcion: "El Volkswagen Vento es un sedán de gama media que combina confort, buen equipamiento y rendimiento. Destaca por su diseño elegante, tecnología moderna y excelente desempeño en ruta.",
    },
    {
        id: 5,
        nombre: "volkswagen amarok",
        imagen: " https://www.google.com/imgres?q=amarok%20venta&imgurl=https%3A%2F%2Facroadtrip.blob.core.windows.net%2Fpublicaciones-imagenes%2FSmall%2Fvolkswagen%2Famarok%2Far%2FRT_PU_788b5d2472f24ffca1a92745060033c8.jpg&imgrefurl=https%3A%2F%2Fautocosmos.minutoarrecifes.com.ar%2Fauto%2Fusado%2Fvolkswagen%2Famarok%3Fa%3D2017&docid=CmgRU4XFAeOeHM&tbnid=dlhCU_HWeCa8-M&vet=12ahUKEwiAvqiD9dWMAxX1Q7gEHYuXDYwQM3oECFEQAA..i&w=479&h=360&hcb=2&ved=2ahUKEwiAvqiD9dWMAxX1Q7gEHYuXDYwQM3oECFEQAA",
        descripcion: "La Volkswagen Amarok es una pickup robusta y versátil, ideal tanto para el trabajo como para el uso diario. Se destaca por su potencia, confort interior y buen rendimiento en todo tipo de terrenos.",
    },
    {
        id: 6, 
        nombre: "audi tt",
        imagen: "https://www.google.com/imgres?q=audi%20tt%20venta&imgurl=https%3A%2F%2Facroadtrip.blob.core.windows.net%2Fpublicaciones-imagenes%2FSmall%2Faudi%2Ftt-rs%2Fmx%2FRT_PU_2e91c1b6d0b9483fa730ba2c40755514.webp&imgrefurl=https%3A%2F%2Fwww.autocosmos.com.mx%2Fguiadeprecios%2Faudi%2Ftt%2F2020&docid=eas9GHNeHkUoqM&tbnid=zwBwmVJHHwTz2M&vet=12ahUKEwjYra6T9dWMAxXyqpUCHd4VFGoQM3oECFoQAA..i&w=480&h=349&hcb=2&ved=2ahUKEwjYra6T9dWMAxXyqpUCHd4VFGoQM3oECFoQAA",
        descripcion: "El Audi TT es un coupé deportivo compacto, conocido por su diseño moderno, su estilo elegante y su excelente desempeño. Combina potencia, tecnología y tracción quattro para una experiencia de conducción dinámica.",
    },
    {
        id: 7,
        nombre: "chevrolet camaro",
        imagen: "https://www.google.com/imgres?q=camaro%20venta&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D290216927086355&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%2F%3Fstory_fbid%3D290216983753016%26id%3D100082941501904&docid=TfaTM9WKfsF0jM&tbnid=aGXJx6u-OYYymM&vet=12ahUKEwjh9_Kl9dWMAxXvqZUCHcrVH7oQM3oECH4QAA..i&w=1068&h=1068&hcb=2&itg=1&ved=2ahUKEwjh9_Kl9dWMAxXvqZUCHcrVH7oQM3oECH4QAA",
        descripcion: "Chevrolet Camaro es un muscle car icónico, con diseño agresivo y gran potencia. Representa el espíritu deportivo estadounidense, combinando alto rendimiento con un estilo llamativo",
    },
    {
        id: 8,
        nombre: "chevrolet onix",
        imagen: " https://www.google.com/imgres?q=onix%20venta&imgurl=https%3A%2F%2Fwww.deruedas.com.ar%2Fimages%2Fautos%2F600%2F600678_1_im.jpg&imgrefurl=https%3A%2F%2Fwww.deruedas.com.ar%2Fvendo%2FChevrolet%2FOnix%2FUsado%2FMendoza%3Fcod%3D600678&docid=w8zOY9jGNHXgHM&tbnid=5ezCazBi6rj8XM&vet=12ahUKEwi6yN679dWMAxXAr5UCHd5VEzAQM3oECHIQAA..i&w=1280&h=1011&hcb=2&ved=2ahUKEwi6yN679dWMAxXAr5UCHd5VEzAQM3oECHIQAA",
        descripcion: "El Chevrolet Onix es un hatchback compacto, económico y moderno. Destaca por su bajo consumo, buen equipamiento tecnológico y excelente relación precio-calidad, ideal para la ciudad.",
    },
    {
        id: 9,
        nombre: "nissan sentra",
        imagen: "https://www.google.com/imgres?q=centra%20venta&imgurl=http%3A%2F%2Fhttp2.mlstatic.com%2FD_623495-MLA80278810540_112024-C.jpg&imgrefurl=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fnissan-centra-usado&docid=5gCU-pKHzU4sMM&tbnid=_V7NYsuufCOGsM&vet=12ahUKEwjZ0PbY9dWMAxVYpZUCHV0vJL4QM3oECBsQAA..i&w=400&h=400&hcb=2&itg=1&ved=2ahUKEwjZ0PbY9dWMAxVYpZUCHV0vJL4QM3oECBsQAA",
        descripcion: "El Nissan Sentra es un sedán compacto que ofrece buen confort, diseño elegante y eficiencia en el consumo. Es una opción confiable para quienes buscan comodidad y rendimiento en el día a día.",
    },
    {
        id: 10,
        nombre: "nissan x-trail",
        imagen: " https://www.google.com/imgres?q=nissan%20xray%20venta&imgurl=http%3A%2F%2Fhttp2.mlstatic.com%2FD_870116-MLA82885274117_032025-C.jpg&imgrefurl=https%3A%2F%2Fautos.mercadolibre.com.ar%2Fnissan%2Fx-trail%2F&docid=8lRhc6eEWdtseM&tbnid=O8DAindp61hmeM&vet=12ahUKEwjVmPHz9dWMAxX9pZUCHTRSIEYQM3oECBAQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwjVmPHz9dWMAxX9pZUCHTRSIEYQM3oECBAQAA",
        descripcion: "El Nissan X-Trail es un SUV versátil y espacioso, ideal para familias. Ofrece un buen equilibrio entre confort, tecnología y capacidad off-road, con un diseño moderno y eficiente en consumo de combustible.",
    }],
    
    comentarios:[{
        nombre: "Sofia", 
        texto: "Este lo tuve, es una maquina", 
        imagen: "" ,
    }],
}


module.exports = data
