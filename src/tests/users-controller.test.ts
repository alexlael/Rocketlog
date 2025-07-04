import  request  from "supertest"
import { app } from "@/app"

describe("UsersController",() => {
    it("should create a new user successfully", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "teste@email.com",
            password: "123456",
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe("Test User")
        
    })
})