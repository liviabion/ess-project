import { defineFeature, loadFeature } from 'jest-cucumber';
import { PrismaClient } from '@prisma/client';

import database from '../database/connection';
import request from 'supertest';
import app from '../../app';

const feature = loadFeature('../backend/src/tests/features/example.feature');
const prismaTestClient = new PrismaClient();
let apiResponse: request.Response;

defineFeature(feature, test => {

  beforeAll(async () => {
    await database.clearValues();
    await database.connect();
  });

  afterAll(async () => {
    await database.clearValues();
    await database.disconnect();
  });
  
  test('Cenário de exemplo', ({ given, when, then, and }) => {  
    given(/^I don't have any user with email "(.*)"$/, async (email) => {
      const userExists = await prismaTestClient.user.findFirst({
        where: {
          email
        }
      });

      expect(userExists).toBe(null);
    });
    
    when(/^I insert a user with: name "(.*)", email "(.*)", cpf "(.*)", password "(.*)", phone "(.*)"$/, async (
      name, email, cpf, password, phone
    ) => {
      apiResponse = await request(app).post('/user').send({
        name, email, cpf, password, phone
      });
      expect(apiResponse.status).toBe(201);
    });

    then(/^I should have a user with email "(.*)"$/, async (email) => {
      expect(apiResponse.body.data).toHaveProperty('email', email);
    });

    and(/^I should have this user with id "(.*)"$/, async (id) => {
      expect(apiResponse.body.data).toHaveProperty('id', Number(id));
    });

  });

});