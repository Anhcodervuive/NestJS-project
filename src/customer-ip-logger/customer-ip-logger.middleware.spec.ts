import { CustomerIpLoggerMiddleware } from './customer-ip-logger.middleware';

describe('CustomerIpLoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new CustomerIpLoggerMiddleware()).toBeDefined();
  });
});
