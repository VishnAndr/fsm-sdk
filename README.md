# SAP Field Service Management SDK 

[![npm version](https://badge.fury.io/js/fsm-sdk.svg)](https://badge.fury.io/js/fsm-sdk) ![integration test](https://github.com/SAP/fsm-sdk/workflows/integration%20test/badge.svg) [![REUSE status](https://api.reuse.software/badge/github.com/SAP/fsm-sdk)](https://api.reuse.software/info/github.com/SAP/fsm-sdk) ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/GauSim/ef8d97285399b9ccfd8acf9e0796cd16/raw/fsm-sdk-badge.json) 

---

## NodeJS SDK to Interface with SAP Field Service Management APIs and Services.
Find more documentation and related information at [SAP Field Service Management Documentation](https://help.sap.com/viewer/product/SAP_FIELD_SERVICE_MANAGEMENT/Cloud/en-US)


- [SAP Field Service Management SDK](#sap-field-service-management-sdk)
  - [NodeJS SDK to Interface with SAP Field Service Management APIs and Services.](#nodejs-sdk-to-interface-with-sap-field-service-management-apis-and-services)
  - [Getting started](#getting-started)
    - [Examples](#examples)
  - [CoreAPIClient](#coreapiclient)
    - [Query for objects using CoreSQL](#query-for-objects-using-coresql)
    - [CRUD object](#crud-object)
      - [Create a new object](#create-a-new-object)
      - [Read object by id](#read-object-by-id)
      - [Update object (providing full new version)](#update-object-providing-full-new-version)
      - [Update object (providing only fields to change)](#update-object-providing-only-fields-to-change)
      - [Delete object](#delete-object)
        - [lastChanged](#lastchanged)
      - [Batch Actions (Transactions)](#batch-actions-transactions)
  - [Support](#support)
  - [License](#license)


## Getting started

install from NPM
```bash
npm i fsm-sdk --save
```

using the sdk with credentials:
```typescript
const fsm = require('fsm-sdk');

const client = new fsm.CoreAPIClient({

  // [mandatory] your client configuration
  clientIdentifier: '<your-clientIdentifier>',
  clientSecret: '<your-clientSecret>',
  clientVersion: '<your-clientVersion>',

  // [optional] oauth grant type, default=password
  authGrantType: 'password' | 'client_credentials' | undefined

  // [optional] | [mandatory] if oauth grant type password
  authAccountName: '<your-authAccountName>',

  // [optional] | [mandatory] if oauth grant type password
  authUserName: '<your-authUserName>',

  // [optional] | [mandatory] if oauth grant type password
  authPassword: '<your-authPassword>',

  // [optional] or default=FIRST
  authCompany: '<your-authCompany>',

  // [optional] provide verbose logs
  debug: true,

  // [optional] enable using custom oauthEndpoints
  oauthEndpoint: 'https://ds.coresuite.com/api/oauth2/v1',

  // [optional] client will cache token (helpful for writing integration tests)
  tokenCacheFilePath: './.myToken.json'

});
```

related doc's:
- [Generating Client ID and Secret](https://help.sap.com/viewer/fsm_admin/Cloud/en-US/generating-client-id.html)

### Examples 
Some illustrative cases are provided in the [examples](./examples) folder.


---

## CoreAPIClient

The CoreAPIClient will return a Promise and is asynchronous by default.

### Query for objects using CoreSQL

Provides the [coreSQL] and the [dtos] used in the query
see [Query API Documentation](https://help.sap.com/viewer/fsm_query_api/LATEST/en-US/query-api-intro.html)

```typescript

const coreSQL =
  `SELECT
    sc.id,
    sc.subject
  FROM
    ServiceCall sc
  WHERE
   sc.id = '36A5626F65A54FE7911F536C501D151A'
  `;

await client.query(coreSQL, ['ServiceCall']);
```

### CRUD object

related doc's:
- [Data Model Documentation](https://help.sap.com/viewer/fsm_data_model/Cloud/en-US/data-model-overview.html)

#### Create a new object

```typescript
const serviceCall = {
   id: fsm.CoreAPIClient.createUUID(), // => 36A5626F65A54FE7911F536C501D151A
   ...
};

await client.post('ServiceCall', serviceCall);
```

#### Read object by id

```typescript
await client.getById('ServiceCall', '36A5626F65A54FE7911F536C501D151A');
```

#### Update object (providing full new version)

```typescript
await client.put('ServiceCall', { ... });
```

#### Update object (providing only fields to change)

```typescript
await client.patch('ServiceCall', {
    id: '36A5626F65A54FE7911F536C501D151A',
    subject: 'update-only-subject',
    lastChanged: 1535712340
  });
```

#### Delete object

```typescript
await client.deleteById('ServiceCall', {
    id: '36A5626F65A54FE7911F536C501D151A',
    lastChanged: 1535712340
  });
```

##### lastChanged

The `lastChanged` field is used for optimistic locking.
It's like a version-key you have to provide in order to update an object.

#### Batch Actions (Transactions)

```typescript
// actions will be excuted in sequence order like in array

const actions = [ 
  new CreateAction('ServiceCall', { ... }), 
  new UpdateAction('BusinessPartner', { id, lastChanged ... }), // [it,lastChanged] required for update
  new DeleteAction('Address', { id, lastChanged ... }) // [it,lastChanged] required for delete
];

const response = await client.batch(actions) 
// response => [ { body: { statusCode: 200|201|400, data: { ... } } }, req1, req2 ]

// data will contain a list resp, unwrap to access first
const [[{ serviceCall }], [{ businessPartner }], ] = response.map(it => it.body.data);
```


## Support

In case you need further help, check out the [SAP Field Service Management Help Portal](https://help.sap.com/viewer/product/SAP_FIELD_SERVICE_MANAGEMENT/Cloud/en-US/) or report and incident in [SAP Support Portal](https://support.sap.com) with the component "CEC-SRV-FSM".

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE](./LICENSE) file.
