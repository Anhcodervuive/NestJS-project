import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerIpLoggerMiddleware } from 'src/customer-ip-logger/customer-ip-logger.middleware';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomerIpLoggerMiddleware).forRoutes('customer');
  }
}
