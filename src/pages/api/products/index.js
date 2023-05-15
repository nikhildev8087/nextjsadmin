import { connectToDatabase } from "@/utils/mongodb";
import Product from "@/model/Product";
import { getSession } from "next-auth/react";
import connectMongo from "@/database/conn";
import { deleteProduct, updateProduct } from "@/controllers/productsController";

export default async function handler(req, res) {
//   const session = await getSession({req})
//   console.log("session data =>",session)
//   console.log(req.body);

  await connectMongo();

  switch (req.method) {
    case "GET": {
      try {
        const products = await Product.find();
        
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
      }
      break;
    }

    case "POST": {
      try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ message: "Error creating product" });
      }
      break;
    }

    case "DELETE": {
      try {
        // const productId = await find(req.query.id);
        // console.log("product id => ",productId)
        const product = await deleteProduct(req.query.id);
        // await product.(req.id);
        // res.status(200).json(req.query.id)
        res.status(200).json({ message: "Product deleted successfully..!" });
      } catch (error) {
        res.status(500).json({ message: "Failed to delete product" });
      }
    }

    case "PUT" : {
        try{
            const product = await updateProduct(req.query.id, req.body);
            if(!product) {
              res.status(404).json({message: "Product not found"});
            }else{
              res.status(200).json({message:"product updated"})
            }
        }catch(error){
            res.status(500).json({message: "Error in update Data"})
        }
    }

    default:
      res.status(404).json({ message: "method not allowed" });
      break;
  }
}
