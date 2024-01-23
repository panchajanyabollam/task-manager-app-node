const {customAPIHandler, CustomAPIError} = require("../errors/custom-error")

const errorHandlerMiddleWare = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).json({msg : "Something Went Wrong!. Please Check Again."})
}

module.exports = errorHandlerMiddleWare