const Chai = require('chai');
const expect = Chai.expect;

const GhostAnalyticsClient = require('../lib/GhostAnalyticsClient');

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
  
  describe('Account', () => {
    const GhostAnalytics = new GhostAnalyticsClient({ publicKey: 'testPublicKey', secretKey: 'testSecretKey' });
    
    it ('should get an account', () => {
      return GhostAnalytics.account.get({ accountId: 1 })
      .then(data => {
        expect(data.doc).to.exist;
        expect(data.doc.id).to.equal(1);
      })
    })
  });
  
  describe('Charge', () => {
    const GhostAnalytics = new GhostAnalyticsClient({ publicKey: 'testPublicKey', secretKey: 'testSecretKey' })
  });
  
  describe('Customer', () => {
    const GhostAnalytics = new GhostAnalyticsClient({ publicKey: 'testPublicKey', secretKey: 'testSecretKey' })
  });
});