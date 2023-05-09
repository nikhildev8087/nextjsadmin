import { connectToDatabase } from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  // const database = client.db("users")

  if (req.method === "GET") {
    const data = await db.collection("users").find().toArray();
    res.json(data);
  }

  if (req.method === "POST") {
    const { title, body } = req.body;
    await db.collection("users").insertOne({ title, body });
    res.json({ message: "Post created" });
  }

  if (req.method === "PUT") {
    const { id, title, body } = req.body;
    // const id = req.query.id;
    console.log(id, title, body)
    // const {id} = req.query;
    
  const result =   await db
      .collection("users").findOne({id:id})
      const update = await db.collection("users").updateOne({id:id}, {$set: {title, body}})
      // .updateOne({ id: id }, { $set: { title, body } });
    // res.json({ message: "Post updated" });
    res.json(update);
  }

  if (req.method === "DELETE") {
    const id = req.query.id;
    const post = await db.collection("users").deleteOne({ id: id });
    console.log("delete id", id);

    if (post.deletedCount === 1) {
      // res.json({message:'Post deleted'})
      res.json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
    // res.json(post)
  }
}
