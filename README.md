# Ghost Analytics node.js client 

## Installation

`npm install ghost-analytics-client`

## Documentation

Documentation is not yet available.

## API Overview

Every resource is accessed via your `ghost-analytics-client` instance:

```js
const GhostAnalytics = require('ghost-analytics-client')({ publicKey: ' your public key ', secretKey: ' your secret key ' });
// GhostAnalytics.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Every resource method returns a promise (bluebird):

```js
GhostAnalytics.customer.create({ email: 'customer@example.com' })
.then(customer => { ...do stuff })
.catch(err => { ...handle error });
```

### Notes

*Where you see `params` it is a plain JavaScript object, e.g. `{ email: 'foo@example.com' }`*
*For requests that return a `single` item, the item will be contained inside of the `doc` property in the response body.*
*For requests that return `multiple` items, the items will be contained inside of the `docs` property in the response body.*
*For requests that delete an item, the response body will contain `{ success: true }`.*

---

## Account

| Endpoint | Description |
| ---- | --------------- |
| [GET /api/v1/accounts/{accountId}] | Get an account|

## `GET /api/v1/accounts/{accountId}`

Returns an account object.

### Example Request

```js
GhostAnalytics.account.get({ accountId: 1 })
.then(account => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    ...the account object
  }
}
```

---

## Charge

| Endpoint | Description |
| ---- | --------------- |
| [POST /api/v1/charges] | Create a charge|

## `POST /api/v1/charges`

Creates and returns a charge object.

### Example Request

```js
GhostAnalytics.charge.create({ 
  amount: 1000, // in cents
  cardId: card_somecardid,
  customerId: customer_somecustomerid,
  description: 'some charge description',
})
.then(charge => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the charge object
  }
}
```

---

## CustomerCard

| Endpoint | Description |
| ---- | --------------- |
| [GET /api/v1/customers/{customerId}/cards/{cardId}] | Get a customer card|
| [POST /api/v1/customers//{customerId}] | Create a customer card|
| [DELETE /api/v1/customers/{customerId}/cards/{cardId}] | Delete a customer card|

## `GET /api/v1/customers/{customerId}/cards/{cardId}`

Returns a customer card object.

### Example Request

```js
GhostAnalytics.customerCard.get({ 
  cardId: card_somecardid,
  customerId: customer_somecustomerid
})
.then(card => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the card object
  }
}
```

## `POST /api/v1/customers/{customerId}/cards`

Creates and returns a customer card object.

### Example Request

```js
GhostAnalytics.customerCard.get({
  number: 4242424242424242,
  expMonth: '02',
  expYear: '2018',
  cvc: 123
  customerId: customer_somecustomerid
})
.then(card => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the card object
  }
}
```

## `DELETE /api/v1/customers/{customerId}/cards/{cardId}`

Deletes a customer card object.

### Example Request

```js
GhostAnalytics.customerCard.delete({
  cardId: card_somecardid
  customerId: customer_somecustomerid
})
.then(success => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "success": true
}
```

---

## Customer

| Endpoint | Description |
| ---- | --------------- |
| [GET /api/v1/customers/{customerId}] | Get a customer|
| [POST /api/v1/customers] | Create a customer|
| [PUT /api/v1/customers/{customerId}] | Update a customer|
| [DELETE /api/v1/customers/{customerId}] | Delete a customer|

## `GET /api/v1/customers/{customerId}`

Returns a customer object.

### Example Request

```js
GhostAnalytics.customer.get({ 
  customerId: customer_somecustomerid
})
.then(customer => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the customer object
  }
}
```

## `POST /api/v1/customers`

Creates and returns a customer object.

### Example Request

```js
GhostAnalytics.customer.create({
  description: 'some customer description'
})
.then(customer => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the customer object
  }
}
```

## `PUT /api/v1/customers/{customerId}`

Updates and returns a customer object.

### Example Request

```js
GhostAnalytics.customer.update({
  customerId: customer_somecustomerid,
  description: 'some new customer description'
})
.then(customer => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the customer object
  }
}
```

## `DELETE /api/v1/customers/{customerId}`

Deletes a customer object.

### Example Request

```js
GhostAnalytics.customer.delete({
  customerId: customer_somecustomerid
})
.then(success => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "success": true
}
```

---

## IdentityEvent

| Endpoint | Description |
| ---- | --------------- |
| [POST /api/v1/identites/{identityId}/events] | Create an identity event|

## `POST /api/v1/identites/{identityId}/events`

Creates and returns an identity event object.

### Example Request

```js
GhostAnalytics.identityEvent.create({
  name: 'Event Click',
  identityId: 1,
  gatId: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
  properties: [{
    'eventId': 4,
    'userId': 3 
  }]
})
.then(identityEvent => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the identity event object
  }
}
```

---

## Order

| Endpoint | Description |
| ---- | --------------- |
| [GET /api/v1/orders/{orderId}] | Get an order|
| [GET /api/v1/orders] | Fetch orders|
| [POST /api/v1/orders] | Create an order|
| [DELETE /api/v1/orders/{orderId}] | Delete an order|

## `GET /api/v1/orders/{orderId}`

Returns an order object.

### Example Request

```js
GhostAnalytics.order.get({ 
  orderId: 1
})
.then(order => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the order object
  }
}
```

## `GET /api/v1/orders`

Fetches order objects based on input parameters.

### Example Request

```js
GhostAnalytics.order.fetch({
  customerId: 'cus_somecustomerid',
  limit: 25,
  offset: 10,
  sortBy: 'createdAt',
  sortDir: 'desc'
})
.then(order => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the order object
  }
}
```

## `POST /api/v1/orders`

Creates and returns an order object.

### Example Request

```js
GhostAnalytics.order.create({
  amount: 5000, // must match total of orderItem amounts
  customerId: 'cus_somecustomerid',
  cardId: 'card_somecardid',
  gatId: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
  orderItems: [{
    amount: 3000,
    type: 'item'
  }, {
    amount: 1000,
    type: 'item',
    identityId: 1
  }, {
    amount: 1000,
    type: 'fee',
    description: 'processing fee'
  }]
})
.then(order => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "doc": {
    the order object
  }
}
```

## `DELETE /api/v1/orders/{orderId}`

Deletes an order object.

### Example Request

```js
GhostAnalytics.order.delete({
  orderId: 1
})
.then(success => { ...do stuff })
.catch(err => { ...handle error });
```

### Example Response

```json
{
  "success": true
}
```

### Errors

All error responses are in the following format, delivered with the corresponding status code:

```json
{
    "message":"Invalid id",
    "status":400,
    "error":"Bad Request"
}
```