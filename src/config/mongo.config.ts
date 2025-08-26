import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => {
  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;
  const cluster = process.env.MONGO_CLUSTER;
  const db = process.env.MONGO_DB

  return {
    uri: `mongodb+srv://${user}:${pass}@${db}${cluster}appName=${db}`,
  }
})
