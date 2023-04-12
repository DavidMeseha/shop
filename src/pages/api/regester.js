import { cachedDb } from "../../../lib/mongodbconnection";
import AES from "crypto-js/aes";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let db = cachedDb

        let user = JSON.parse(req.body)

        if (!user.password) res.status(400).json('failed')
        user.password = AES.encrypt(user.password, process.env.CRYPTO_KEY).toString()

        let newUser = await db.collection("users").insertOne({ email: user.email, password: user.password });

        if (newUser) return res.json('ok')

        return res.status(400).json('failed')
    }
}