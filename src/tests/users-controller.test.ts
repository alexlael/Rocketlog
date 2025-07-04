import { prisma } from "@/database/prisma";
import request from "supertest";
import { app } from "@/app";
import exp from "constants";

describe("UsersController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({ where: { id: user_id } });
  });

  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "teste@email.com",
      password: "123456",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");

    user_id = response.body.id;
  });

  it("should not create a user with an existing email", async () => {
    const response = await request(app).post("/users").send({
      name: "Duplicate User",
      email: "teste@email.com",
      password: "123456",
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email already in use");
  });

  it("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
        name: "Test User",
        email: "invalid-email",
        password: "pass123"
    })

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Validation error");
  })
    


});
