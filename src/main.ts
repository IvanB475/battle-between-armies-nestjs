import { NestFactory } from '@nestjs/core';
import { ArmyModule } from './army.module';

async function bootstrap() {
  const app = await NestFactory.create(ArmyModule);
  await app.listen(3000);
}
bootstrap();
