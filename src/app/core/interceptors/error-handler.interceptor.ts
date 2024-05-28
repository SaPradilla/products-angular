import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe( catchError((error:HttpErrorResponse)=>{

    let errorMsgs:string;
    
    if(error.error instanceof ErrorEvent){
      errorMsgs = `Error: ${error.error.message}`;
    }else{
      errorMsgs = `Error code: ${error.status}; message: ${error.message}`;  
    }
    return throwError(()=> errorMsgs);

  }))


};
