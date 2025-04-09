import 'dotenv/config'
import { db } from "./drizzle/db"
import { usersTable } from "./drizzle/schema"

async function main() {
    console.log("Helllo")
    console.log(process.env.DATABASE_URL)
    await db.insert(usersTable).values({ name: "navi", age: 10, email: "navisureka23@gmail.com" })
    const user = await db.query.usersTable.findFirst()
    console.log({ user })

}

main()


