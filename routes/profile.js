const express = require("express")
const router = express.Router() 
const profileController = require("../controllers/profileController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/:id", profileController.index) //cambiamos

module.exports = router /*esto va siempre al final del docs*/

// Pasar todo lo que es login/register a ruta user, separar metodos de profileController a userController, y despues a / agregarle :id