import { PhoneNumberModule } from './phone-number.module';

describe('PhoneNumberModule', () => {
  let phoneNumberModule: PhoneNumberModule;

  beforeEach(() => {
    phoneNumberModule = new PhoneNumberModule();
  });

  it('should create an instance', () => {
    expect(phoneNumberModule).toBeTruthy();
  });
});
