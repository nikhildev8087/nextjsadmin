import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  //only post method is accepted
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    if(!req.body) return res.status(404).json({error: "Dont have form Data...!"});
    try {
      await connectMongo();

      //check if user is already exist
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      const hashedPassword = await hash(password, 12);
      const user = await Users.create({
        username,
        email,
        login:false,
        password: hashedPassword,
      });
      res.status(201).json({ status: true, user });
    } catch (err) {
      res.status(500).json({ err:"unhandled error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
