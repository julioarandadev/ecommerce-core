import {Request, Response} from 'express';

export async function midwProductsList(req: Request, res: Response, next: any){
   
   const requiredScope = 'Consultar';
   
   if(req.headers['scopes']){
      
       const scopes:any = req.headers['scopes'];
       
       const isScope = (element:any) => element === requiredScope;

       let found:any = scopes.findIndex(isScope);
       
       console.log('- - - Core / Product list / Verifyin Scopes - - -');

       if (found > -1){
         next();
       }else{
         res.json(
            {
             auth: false,
             message:"Sorry, your membership does not support this action !"  
            }
         );
       }
       
    }else{
      res.json(
         {
          auth: false,
          message:"Missing Scopes to get access on Products list!"  
         }
      );
    }

}