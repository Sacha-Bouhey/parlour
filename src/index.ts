import argon2 from "argon2";
import e from "express";
import * as readline from 'node:readline/promises';

async function main() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try{
        const password = await rl.question('input password');
        console.log(password);
        const hash = await argon2.hash(password);
        console.log(hash);

        const isvalid = await argon2.verify(hash, password);

        if(isvalid){
            console.log("mot de passe correct");
    }


    } finally {
        rl.close()
    }

    
}

main();