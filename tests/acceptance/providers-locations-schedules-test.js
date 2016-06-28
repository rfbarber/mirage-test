import { test } from 'qunit';
import moduleForAcceptance from 'mirage-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | providers locations schedules');

test('create providers with no schedules and locations', function(assert) {
  let providers = server.createList('provider', 10);

  assert.equal(server.schema.db.schedules.length, 0, 'there are no schedules');
  assert.equal(server.schema.db.locations.length, 0, 'there are no locations');
  assert.equal(server.schema.db.providers.length, 10, 'there are 10 providers');

  providers.forEach((provider)=>{
    assert.equal(provider.scheduleIds.length, 0, 'provider should have zero schedules');
  });

  assert.ok(true);
});

test('create provider with schedules and locations', function(assert) {
  let location = server.create('location');
  let provider = server.create('provider');

  assert.equal(provider.scheduleIds.length, 0, 'provider should have no schedules');

  let schedule = server.create('schedule', { location, provider });
  provider.schedules = [ schedule ];

  assert.equal(provider.scheduleIds.length, 1, 'provider should have one schedule');
});

test('create providers with no schedules and locations', function(assert) {
  let providers = server.createList('provider', 10);

  assert.equal(server.schema.db.schedules.length, 0, 'there are no schedules');
  assert.equal(server.schema.db.locations.length, 0, 'there are no locations');
  assert.equal(server.schema.db.providers.length, 10, 'there are 10 providers');

  providers.forEach((provider)=>{
    assert.equal(provider.scheduleIds.length, 0, 'provider should have zero schedules');
  });

  assert.ok(true);
});
