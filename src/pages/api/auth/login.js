import { compare } from "bcryptjs";
import sign from "jsonwebtoken";
import Users from "@/model/Schema";
import connectMongo from "@/database/conn";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log("request body in login api => ", req.body);
    try {
      await connectMongo();

      const user = await Users.findOne({ email: req.body.email });
      console.log("user => ", user);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      //check if password is correct or not
      const isPasswordCorrect = await compare(password, user.password);
      console.log("password check =>", isPasswordCorrect);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      //issue jwt Token
      
      const token = sign({ userId: user._id }, 12, { expiresIn: "id" });
      if(!token){
        return res.status(500).json({message:"error while generating token"})
      }
    //   console.log("check token =>",token)
      res.status(200).json(token);
    } catch (err) {
      res.status(400).json({ message: "unhandled error" });
    }
  }
}
