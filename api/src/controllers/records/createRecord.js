const { Record, User } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const { token, recordName, recordPhone, recordEmail, recordImage } = req.recordData;

//aqui uso el decoded


    // Crear un nuevo registro
//const userId= lo que venga del decoded
let userId

//busco el user por id y traigo los datos
let user = await User.findById({ userId });

    const newRecord = new Record({
      userId,
      name: recordName,
      phone: recordPhone,
      email: recordEmail,
      image: recordImage,
    });

    // Guardar el nuevo registro
    await newRecord.save();

    // Asociar el nuevo registro con el usuario
    user.records.push(newRecord._id);
    await user.save();

    response(res, 200, newRecord);
  
};