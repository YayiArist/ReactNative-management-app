/* const { Record, User } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
    const {datos que recibe incluido el ID } =
      req.recordData;
  
    let record = await Record.findById({ recordId });

  
    if (record) {
      
  
      response(res, 200, record);
    } else {
      response(res, 400, { message: "Record doesnt exist" });
    }
  };
   */