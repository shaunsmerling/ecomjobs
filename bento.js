import { Analytics } from '@bentonow/bento-node-sdk';

const bento = new Analytics({
  authentication: {
    publishableKey: 'publishableKey',
    secretKey: 'secretKey', 
  },
  logErrors: false, // Set to true to see the HTTP errors logged
  siteUuid: 'siteUuid',
});

bento.V1.track({
  email: 'test@bentonow.com',
  type: '$formSubmitted',
  fields: {
    first_name: 'Test',
    last_name: 'Test',
  },
  details: {
    fromCustomEvent: true,
  },
}).then(result => console.log(result)).catch(error => console.error(error));

bento.V1.trackPurchase({
  email: 'test@bentonow.com',
  purchaseDetails: {
    unique: { key: 1234 }, // this key stops duplicate order values being tracked
    value: { amount: 100, currency: 'USD' },
  },
  cart: {
    abandoned_checkout_url: 'https://example.com',
  },
});