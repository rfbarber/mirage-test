import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  gender() {
    return faker.list.random('Male', 'Female')();
  },
  profileImage(i) {
    let number = faker.list.cycle(1, 2, 3, 4, 5, 6, 7, 8)(i);
    return `/assets/images/dev/profile-image-${number}.png`;
  },
  specialty() {
    return faker.name.jobArea();
  },
  suffix() {
    return faker.name.suffix();
  }
});
