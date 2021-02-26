import request from 'supertest';
import { createConnection } from 'typeorm';
import { app } from '../app';

describe("Surveys", () => {
    beforeAll(async() => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    it("Should be able to create a new survey", async() => {
        const response = await request(app).post("/surveys")
        .send({
            title: "title example",
            description: "Description example"
        })
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id")
    })

    it("Should be able to get all surveys", async() => {
        await request(app).post("/surveys")
        .send({
            title: "title example2",
            description: "Description example2"
        })

        const response = await request(app).get("/surveys")

        expect(response.body.length).toBe(2);
    })

   
})