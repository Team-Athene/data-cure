import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { APP } from 'app/shared/environment'

async function boostrap() {
  const logger = new Logger('Novis Api')

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  })

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const config = new DocumentBuilder()
    .setTitle('Novis api')
    .setDescription('main api')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  app.enableCors({
    origin: '*',
  })
  if (APP.NODE_ENV !== 'production') {
    SwaggerModule.setup('api', app, document)
    logger.log(`Swagger api at http://localhost:${APP.PORT}/api`)
  }

  await app.listen(APP.PORT)
  logger.log(`Server is Connected at http://localhost:${APP.PORT}`)
  logger.log(`Swagger Api at http://localhost:${APP.PORT}/api`)
  logger.log(`Swagger Stats at http://localhost:${APP.PORT}/stats`)
  logger.verbose('Api is listening...version 1.0.0')
}

boostrap()
