import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { HttpLoggerMiddleware } from '@nest-toolbox/http-logger-middleware'
import { FileMigrationModule } from './file-migration/file-migration.module'
import { APP } from './shared/environment'

@Module({
  imports: [FileMigrationModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    if (APP.NODE_ENV !== 'production') {
      consumer.apply(HttpLoggerMiddleware).forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
    }
  }
}
