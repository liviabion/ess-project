import { defineFeature, loadFeature } from 'jest-cucumber';
import { PrismaClient } from '@prisma/client';

import database from '../database/connection';
import request from 'supertest';
import app from '../../app';

const feature = loadFeature('../backend/src/tests/features/example.feature');
const prismaTestClient = new PrismaClient();
let apiResponse: request.Response;

describe('User Repository', () => {
  beforeAll(async () => {
    await database.clearValues();
    await database.connect();
  });

  afterAll(async () => {
    await database.clearValues();
    await database.disconnect();
  });

  const exampleUser = {
    name: 'Fulano',
    email: 'f@root.com.br',
    cpf: '12345678901',
    password: '123456',
    phone: '12345678901',
  };

  it('should create a user', async () => {
    const user = await prismaTestClient.user.create({ data: exampleUser });

    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name', exampleUser.name);
    expect(user).toHaveProperty('email', exampleUser.email);
    expect(user).toHaveProperty('cpf', exampleUser.cpf);
    expect(user).toHaveProperty('password', exampleUser.password);
    expect(user).toHaveProperty('phone', exampleUser.phone);
  });

  it('should find a user by email', async () => {
    const userFound = await prismaTestClient.user.findUnique({ where: { email: exampleUser.email } });

    expect(userFound).not.toBeNull();
  });

  it('should find a user by id', async () => {
    const userFound = await prismaTestClient.user.findUnique({ where: { id: 1 } });

    expect(userFound).not.toBeNull();
  });

  it('should find all users', async () => {
    const users = await prismaTestClient.user.findMany();

    expect(users).toHaveLength(1);
  });

  it('should update a user', async () => {
    const userUpdated = await prismaTestClient.user.update({
      where: { id: 1 },
      data: { name: 'Ciclano' },
    });

    expect(userUpdated).toHaveProperty('id', 1);
    expect(userUpdated).toHaveProperty('name', 'Ciclano');
  });

  it('should delete a user', async () => {
    const userDeleted = await prismaTestClient.user.delete({ where: { id: 1 } });

    expect(userDeleted).toHaveProperty('id', 1);
  });
});