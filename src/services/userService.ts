import argon2 from "argon2"
import { createUser } from "../repositories/userRepositories.js";
import { findUser } from "../repositories/userRepositories.js";

async function userCreation() {
    try {
    const username = "firstuser";
    const email = "frist@user.com";
    const password = "bonjour"

    const passwordHash = await argon2.hash(password);

    const userID = await createUser(
        username,
        email,
        passwordHash
    );
    console.log("user created", userID)
    } catch(error) {
        console.error(error);
        process.exit;
    }
}

export async function userConnection(username: string, password: string) {
    const user = await findUser(username);

    if (!user) {
        throw new Error("invalid credentials");
    }

    const isPasswordValid = argon2.verify(user.password_hash, password);
}