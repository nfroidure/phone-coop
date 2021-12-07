/* eslint-disable */
const { generateSDKFromOpenAPI } = require('openapi-ts-sdk-builder');
const { readFileSync, writeFileSync } = require('fs');
const packageConf = require('../package.json');

run();

async function run() {
  const openAPIContents = readFileSync('/dev/stdin', 'utf-8');
  const sdkContents = await generateSDKFromOpenAPI(openAPIContents, {
    sdkVersion: packageConf.version,
    ignoredParametersNames: ['cookie', 'X-API-Version', 'X-SDK-Version'],
    undocumentedParametersNames: ['X-Application-Version'],
  });

  writeFileSync('/dev/stdout', sdkContents, 'utf-8');
}
