import Ember from 'ember';
import WormholeTargetService from 'ember-wormhole/services/wormhole-target';

const { inject } = Ember;

export default WormholeTargetService.extend({
  liquidTargetService: inject.service('liquid-target'),

  appendRange(target, firstNode, lastNode) {
    if (Ember.typeOf(target) === 'string') {
      this.get('liquidTargetService').appendRange(target, firstNode, lastNode);
    } else {
      this.removeRange(target, firstNode, lastNode);

      this._super(target, firstNode, lastNode);
    }
  },

  removeRange(target, firstNode, lastNode) {
    this.get('liquidTargetService').removeRange(target, firstNode, lastNode);
  }
});
