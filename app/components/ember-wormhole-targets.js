import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  wormholeTargetService: inject.service('wormhole-target'),

  targets: computed.reads('wormholeTargetService.targets')
});
