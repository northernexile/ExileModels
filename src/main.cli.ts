import 'dotenv/config';
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';
import * as process from 'node:process';
let exitCode = 0;
const bootstrap = async () => {
  await CommandFactory.run(AppModule, ['warn', 'error']);
};

bootstrap()
  .then(async (app) => {})
  .catch((err) => {
    console.error(`Command runner encountered an error`, err);
    exitCode = 1;
  })
  .finally(() => {
    process.exit(exitCode);
  });
