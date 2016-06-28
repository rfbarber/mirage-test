import { belongsTo, Model } from 'ember-cli-mirage';

export default Model.extend({
  location: belongsTo(),
  provider: belongsTo()
});
