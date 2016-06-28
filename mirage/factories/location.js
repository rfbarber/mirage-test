import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  address() {
    return faker.address.streetAddress();
  },
  city() {
    return faker.address.city();
  },
  facilityName() {
    return faker.company.companyName();
  },
  latitude() {
    return faker.address.latitude();
  },
  longitude() {
    return faker.address.longitude();
  },
  name() {
    return faker.address.county();
  },
  phone() {
    let phoneNumber = faker.phone.phoneNumberFormat(2);
    return phoneNumber.replace(/-/g, '');
  },
  state() {
    return faker.address.state();
  }
});
