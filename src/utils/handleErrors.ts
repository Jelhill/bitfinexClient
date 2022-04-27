class GenericResponseError extends Error {

    code: any
    constructor(code: number, message: any) {
      super(message);
      this.code = code;
    }
}
  
export function throwError(message: any, code = 400) {
    throw new GenericResponseError(code, message);
}

export const handleCastErrorExceptionForInvalidObjectId = () => throwError('Invalid Parameter. Resource Not Found');
  
export const isCastError = (error = '') => error.toString().indexOf('CastError') !== -1;
  