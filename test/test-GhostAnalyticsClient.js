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
    describe('Customer', () => {
      
      it('should create a customer', (done) => {
        GhostAnalytics.customer.create({ description: 'This is a test' })
        .then(customer => {
          expect(customer).to.exist;
          expect(customer.description).to.equal('This is a test');
          done();
        })
        .catch(err => {
          done(err)
        });
      });
    });
    describe('Identity', () => {});
    describe('IdentityEvent', () => {});
    describe('Order', () => {
      it('should create an order', (done) => {
        const orderItems = data.orderItems || [{
            type: 'item',
            amount: 400
          }, {
            type: 'item',
            amount: 400
          },{
            type: 'tax',
            description: 'sales tax',
            amount: 200
          }];
  
        GhostAnalytics.order.create({
          amount: 1000,
          customerId: 'cus_somecustomer',
          cardId: 'card_somecard',
          description: 'test order',
          orderItems: orderItems
        })
        .then(result => {
          expect(result).to.exist;
          expect(result.doc).to.exist;
        })
        .catch(err => done(err));
      });
    });
  })
});