import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main() {
    const job = await prisma.job.create({
        data: {
            email: "booty",
            name: "mr.booty"
        }
    })
    console.log(job)
}

main();