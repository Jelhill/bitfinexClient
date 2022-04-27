
class BaseController {
    success(res, data: any, message = 'success', httpStatus = 200) {
      res.status(httpStatus).send({
        statusCode: httpStatus,
        success: true,
        message,
        data,
      });
    }
  
    error(res, error) {
      res.status(error.code || 400).json({
        statusCode: error.code,
        success: false,
        message: error.message,
      });
    }
  }
  
  export const ResponseHelper = new BaseController();