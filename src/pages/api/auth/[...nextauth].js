import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";
import { clientPromise, cachedDb as db } from "../../../../lib/mongodbconnection"

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.AUTH_SECRET,

    providers: [
        CredentialsProvider({
            name: "credentials",

            async authorize(credentials, req) {
                let { email, password } = credentials

                const user = await db.collection('users').findOne({ email: email })

                if (!user) return null

                let decryptedPass = AES.decrypt(user.password, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8)

                if (decryptedPass !== password) return null

                return user
            }
        })
    ],

}
export default NextAuth(authOptions)