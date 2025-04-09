// función index devuelve el listado de usuarios
const User = require("../models/user.models");

const { Op } = require("sequelize");

const index = async (req, res) => {
    // try {
    //     res.status(200).json({message: "Ingreso al controlador de index"})    
    // } catch (error) {
    //     res.status(400).json({message: "Ruta no encontrada"})
    // }
    try {
        const users = await User.findAll();

        if(!users || users.length == 0){
            return res.status(404).json({
                status: false,
                msg: "No existen usuarios en la base de datos",
                data: null,
            });
        } else{
            return res.status(200).json({
                status: true,
                msg: "Listado de usuarios obtenido correctamente",
                data: users,
            });
        }

       
    } catch (error) {
        return res.status(500).json({
            status: false,
            msg:`Error al obtener el listado ${error.message}`,
            data: null,
        });
    }
};

const create = async (req, res) => {
    try {
        // const user = await User.create(req.body);
        const [ user, created ] = await User.findOrCreate({
            where: { email: req.body.email},
            defaults: req.body,
        });

        if (!created){
            return res.status(409).json({
                status: false,
                msg: "Email ya existe en otro usuario. No se puede crear",
                data: null,
            });

        }

        return res.status(201).json({
            status: true,
            msg: "Usuario creado correctamente",
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            msg:`Error al crear un usuario ${error.message}`,
            data: null,
        });
    }

    // try {
    //     res.status(200).json({message: "Ingreso al controlador de create"})    
    // } catch (error) {
    //     res.status(400).json({message: "Ruta no encontrada"})
    // }
};

const update = async (req, res) => {

    try { 
        /** Captura el ID desde la URL */ 
        const idUser = req.params.id; 
        //El "findByPk" Busca por llave primaria El "User.findByPk" Le apunta a buscar en el modelo
        const user = await User.findByPk(idUser); 
     
        if (!user) { 
          return res.status(404).json({ 
            status: false, 
            msg: `Usuario a actualizar con el id: ${idUser}, no encontrado en base de datos.`, 
            data: null, 
          }); 
        } 
     
        /** validar que el correo no exista en otro usuario */ 
        const emailExist = await User.findOne({ 
          //"id: [Op.ne]: idUser " me excluye el valor del idUser de mi consulta
          where: { email: req.body.email, 
            id: { [Op.ne]: idUser } }, // Excluye el usuario con el id igual a 'idUser' (no lo incluye en la busqueda)
        }); 
        if (emailExist) { 
          return res.status(409).json({ 
            status: false, 
            msg: "Email ya existe en otro usuario. No se puede crear.", 
            data: null, 
          }); 
        } 
        /** De lo contrario almacenar el usuario */ 
        const userUpdate = await User.update(req.body, { 
          where: { id: idUser },  
        }); 
     
        const userUpdated = await User.findByPk(idUser); 
     
        return res.status(200).json({ 
          status: true, 
          msg: `Usuario con el id: ${idUser}, actualizado de forma correcta`, 
          data: userUpdated, 
        }); 
      } catch (error) { 
        return res.status(500).json({ 
          status: false, 
          msg: `Error al actualizar un usuario: ${error.message}`, 
          data: null, 
        }); 
      }


    // try {
    //     const id = req.params.id;
    //     res.status(200).json({message: `Ingreso al controlador de update con el id: ${id}`})    
    // } catch (error) {
    //     res.status(400).json({message: "Ruta no encontrada"})
    // }
};

const destroy = async (req, res) => {
    try { 
        const idUser = req.params.id; 
        const user = await User.findByPk(idUser); 
        if (!user) { 
          return res.status(404).json({ 
            status: false, 
            msg: `Usuario a eliminar con el id: ${idUser}, no encontrado en base de datos.`, 
            data: null, 
          }); 
        } 
     
        await  user.destroy(); 
        return res.status(200).json({ 
          status: true, 
          msg: `Usuario con el id: ${idUser}, eliminado de forma correcta`, 
        }); 
     
      } catch (error) { 
        return res.status(500).json({ 
          status: false, 
          msg: `Error al eliminar un usuario: ${error.message}`,                                                         
        }); 
      } 
};

const show = async (req, res) => {
    try { 
        const id = req.params.id; 
     
        const user = await User.findByPk(id); 
        if (!user) { 
          return res.status(404).json({ 
            status: false, 
            msg: `Usuario con el id: ${id}, no encontrado en base de datos.`, 
            data: null, 
          }); 
        } 
     
        return res.status(200).json({ 
          status: true, 
          msg: "Usuario encontrado de forma correcta", 
          data: user, 
        }); 
      } catch (error) { 
        return res.status(500).json({ 
          status: false, 
          msg: `Error al consultar un usuario: ${error.message}`, 
          data: null, 
        }); 
      } 


    // try {
    //     res.status(200).json({message: "Ingreso al controlador de show"})    
    // } catch (error) {
    //     res.status(400).json({message: "Ruta no encontrada"})
    // }
};

//Exportar el modulo
module.exports= {
    index,
    create,
    update,
    destroy,
    show
};