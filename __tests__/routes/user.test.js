import supertest from 'supertest';
import app from '../../dist/app';

process.env.DATABASE_URL = process.env.TEST_DATABASE_URL

const requests = {};

