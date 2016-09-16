const Chai = require('chai');
const expect = Chai.expect;

const GhostAnalyticsClient = require('../index');

describe('GhostAnalyticsClient', () => {
  
  it('should throw an error if the client is instantiated without api keys', (done) => {
    try {
      const GhostAnalytics = new GhostAnalyticsClient()
    } catch (err) {
      expect(err).to.exist;
    } finally {
      done();
    }
  });
  
  it('should instantiate the client', (done) => {
    try {
      const GhostAnalytics = new GhostAnalyticsClient({ publicKey: 'testPublicKey', secretKey: 'testSecretKey' })
    } catch (err) {
      expect(err).to.exist;
    } finally {
      done();
    }
  });
  
  describe('Resources', () => {
    const GhostAnalytics = new GhostAnalyticsClient({ publicKey: 'testPublicKey', secretKey: 'testSecretKey' });
    
    describe('Account', () => {});
    describe('Charge', () => {});
    describe('Customer', () => {});
    describe('Identity', () => {});
    describe('IdentityEvent', () => {});
    describe('Order', () => {});
  })
});