import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { HttpLoggerMiddleware } from '@nest-toolbox/http-logger-middleware'
import { APP } from './shared/environment'
import { LHFileModule } from './LHFile/LHFile.module'

@Module({
  imports: [LHFileModule],
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
