import {Request,Response} from 'express';

const product = require ('../../models/products.model');

export  async function productsListController(req: Request, res: Response){
      console.log('- - - Extracting Products List - - -');
      const listProducts = await product.find();
      
      if(!listProducts){
           
            return res.status(401).json({
                  user:false,
                  messaje: 'Sorry, no Products Available!'
              });
            
      }else{
            return res.status(200).json({
                  message: 'Lista de productos',
                  listProducts,
                                          
              }); 
      }

}