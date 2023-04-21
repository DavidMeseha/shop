import { cachedDb } from "../../../lib/mongodbconnection";
import AES from "crypto-js/aes";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let db = cachedDb

        let user = JSON.parse(req.body)

        let isRegestered = await db.collection("users").findOne({ email: user.email }) ? true : false
        if (isRegestered) return res.status(300).json('Email Already Regestered')

        user.password = AES.encrypt(user.password, process.env.CRYPTO_KEY).toString()

        let newUser = await db.collection("users").insertOne({ name: user.name, email: user.email, password: user.password });
        if (newUser) return res.json('regestered')

        return res.status(400).json('failed')
    }
}