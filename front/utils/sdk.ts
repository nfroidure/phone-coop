/* tslint:disable */
/* eslint-disable */
// WARNING: This file is automatically generated
// do not change it in place it would be overridden
// by the next build

import querystring from "querystring";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

type Writeable<T extends { [x: string]: unknown }> = {
  [P in keyof T]: T[P];
};
export type Method =
  | "options"
  | "get"
  | "head"
  | "post"
  | "put"
  | "patch"
  | "delete";
export type QueryParams = {
  [name: string]: string | number | string[] | number[] | boolean | undefined;
};
export type Headers = Record<string, string>;
export type URIBuilderOptions = {
  baseURL?: string;
};
export type InputBuilderOptions = URIBuilderOptions & {
  headers?: Headers;
};
export type URIData = {
  baseURL: string;
  path: string;
  params: QueryParams;
};
export type HTTPRequest<T> = URIData & {
  method: Method;
  headers: Headers;
  body: T;
};
export type { APITypes, Components };

declare namespace APITypes {
  export namespace GetOpenAPI {
    export type Output = Responses.$200;
    export type Input = {};
    export namespace Responses {
      export type $200 = Components.Responses.getOpenAPIResponse200<200>;
    }
  }
  export namespace GetPhoneBrands {
    export type Output = Responses.$200;
    export type Input = {};
    export namespace Responses {
      export type $200 = Components.Responses.getPhoneBrandsResponse200<200>;
    }
  }
  export namespace PostToken {
    export type Body = Components.RequestBodies.PostTokenRequestBody;
    export type Output = Responses.$204;
    export type Input = {
      readonly body: Body;
    };
    export namespace Responses {
      export type $204 = Components.Responses.postTokenResponse204<204>;
    }
  }
  export namespace GetPing {
    export type Output = Responses.$200;
    export type Input = {};
    export namespace Responses {
      export type $200 = Components.Responses.getPingResponse200<200>;
    }
  }
}
declare namespace Components {
  export namespace RequestBodies {
    export type PostTokenRequestBody =
      Components.Schemas.RequestBodiespostTokenRequestBodyBody0;
  }
  export namespace Responses {
    type postTokenResponse204<S extends number> = {
      readonly status: S;
      readonly headers?: {
        readonly [name: string]: unknown;
      };
      readonly body?: NonNullable<unknown>;
    };
    type getOpenAPIResponse200<S extends number> = {
      readonly status: S;
      readonly headers?: {
        readonly [name: string]: unknown;
      };
      readonly body: Components.Schemas.ResponsesgetOpenAPIResponse200Body0;
    };
    type getPhoneBrandsResponse200<S extends number> = {
      readonly status: S;
      readonly headers?: {
        readonly [name: string]: unknown;
      };
      readonly body: Components.Schemas.ResponsesgetPhoneBrandsResponse200Body0;
    };
    type getPingResponse200<S extends number> = {
      readonly status: S;
      readonly headers?: {
        readonly [name: string]: unknown;
      };
      readonly body: Components.Schemas.ResponsesgetPingResponse200Body0;
    };
  }
  export namespace Schemas {
    export type RequestBodiespostTokenRequestBodyBody0 = NonNullable<{
      firstName: NonNullable<string>;
      givenName: NonNullable<string>;
      email: NonNullable<string>;
      tel: NonNullable<string>;
      phoneBrand: NonNullable<number>;
      phoneYear: NonNullable<number>;
    }>;
    export type ResponsesgetOpenAPIResponse200Body0 = NonNullable<{}>;
    export type ResponsesgetPhoneBrandsResponse200Body0 = NonNullable<
      NonNullable<{
        id: NonNullable<number>;
        label: NonNullable<string>;
      }>[]
    >;
    export type ResponsesgetPingResponse200Body0 = NonNullable<{
      pong?: "pong";
    }>;
  }
}

const DEFAULT_BASE_URL = "http://localhost:8000/v0";
const URI_BUILDER_DEFAULTS = {
  baseURL: DEFAULT_BASE_URL,
};
const INPUT_BUILDER_DEFAULTS = {
  baseURL: DEFAULT_BASE_URL,
  headers: {},
};

/**
 * A project to recycle phones
 * @module API
 * @version 0.0.0
 */
const API = {
  getOpenAPI,
  getPhoneBrands,
  postToken,
  getPing,
};

export const APIURIBuilders = {
  getOpenAPI: buildGetOpenAPIURI,
  getPhoneBrands: buildGetPhoneBrandsURI,
  postToken: buildPostTokenURI,
  getPing: buildGetPingURI,
};

export const APIMethods = {
  getOpenAPI: "get",
  getPhoneBrands: "get",
  postToken: "post",
  getPing: "get",
} as const;

export const APIInputBuilders = {
  getOpenAPI: buildGetOpenAPIInput,
  getPhoneBrands: buildGetPhoneBrandsInput,
  postToken: buildPostTokenInput,
  getPing: buildGetPingInput,
};

/**
 * Build the "getOpenAPI" URI parameters$
 * @return {Object}
 * The object describing the built URI
 * @param {Object} parameters
 * The parameters provided to build the URI (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 */
function buildGetOpenAPIURI(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
  }: URIBuilderOptions = URI_BUILDER_DEFAULTS
): URIData {
  const __pathParts = ["openAPI"];
  const __qs = cleanQuery({});

  return {
    baseURL: __baseURL,
    path: __pathParts.join("/"),
    params: __qs,
  };
}

/**
 * Build all the "getOpenAPI" parameters
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 * @param {string} options.headers
 * Any additional headers to append
 */
function buildGetOpenAPIInput(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
    headers: __headers = {},
  }: InputBuilderOptions = INPUT_BUILDER_DEFAULTS
): HTTPRequest<undefined> {
  const __method = APIMethods.getOpenAPI;
  const __uriData = buildGetOpenAPIURI({}, { baseURL: __baseURL });

  return {
    method: __method,
    ...__uriData,
    headers: cleanHeaders(
      Object.assign(__headers, {
        "X-API-Version": "0.0.0",
      })
    ),
    body: undefined,
  };
}

/**
 * Get API documentation.
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
async function getOpenAPI(
  _: unknown,
  options: InputBuilderOptions & Partial<AxiosRequestConfig> = {}
): Promise<Writeable<APITypes.GetOpenAPI.Output>> {
  const httpRequest = buildGetOpenAPIInput({}, options);
  const callOptions = {
    baseURL: httpRequest.baseURL,
    method: httpRequest.method,
    url: httpRequest.path,
    headers: httpRequest.headers,
    params: httpRequest.params,
    data: httpRequest.body,
  };

  const response = await axios(
    Object.assign(
      {
        ...callOptions,
        paramsSerializer: querystring.stringify.bind(querystring),
        validateStatus: (status: number) => 200 <= status && 300 > status,
      },
      options || {}
    )
  );

  return {
    status: response.status,
    headers: response.headers,
    body: response.data,
  } as APITypes.GetOpenAPI.Output;
}

/**
 * Build the "getPhoneBrands" URI parameters$
 * @return {Object}
 * The object describing the built URI
 * @param {Object} parameters
 * The parameters provided to build the URI (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 */
function buildGetPhoneBrandsURI(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
  }: URIBuilderOptions = URI_BUILDER_DEFAULTS
): URIData {
  const __pathParts = ["phones", "brands"];
  const __qs = cleanQuery({});

  return {
    baseURL: __baseURL,
    path: __pathParts.join("/"),
    params: __qs,
  };
}

/**
 * Build all the "getPhoneBrands" parameters
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 * @param {string} options.headers
 * Any additional headers to append
 */
function buildGetPhoneBrandsInput(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
    headers: __headers = {},
  }: InputBuilderOptions = INPUT_BUILDER_DEFAULTS
): HTTPRequest<undefined> {
  const __method = APIMethods.getPhoneBrands;
  const __uriData = buildGetPhoneBrandsURI({}, { baseURL: __baseURL });

  return {
    method: __method,
    ...__uriData,
    headers: cleanHeaders(
      Object.assign(__headers, {
        "X-API-Version": "0.0.0",
      })
    ),
    body: undefined,
  };
}

/**
 * Provide a list of phones brands
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
async function getPhoneBrands(
  _: unknown,
  options: InputBuilderOptions & Partial<AxiosRequestConfig> = {}
): Promise<Writeable<APITypes.GetPhoneBrands.Output>> {
  const httpRequest = buildGetPhoneBrandsInput({}, options);
  const callOptions = {
    baseURL: httpRequest.baseURL,
    method: httpRequest.method,
    url: httpRequest.path,
    headers: httpRequest.headers,
    params: httpRequest.params,
    data: httpRequest.body,
  };

  const response = await axios(
    Object.assign(
      {
        ...callOptions,
        paramsSerializer: querystring.stringify.bind(querystring),
        validateStatus: (status: number) => 200 <= status && 300 > status,
      },
      options || {}
    )
  );

  return {
    status: response.status,
    headers: response.headers,
    body: response.data,
  } as APITypes.GetPhoneBrands.Output;
}

/**
 * Build the "postToken" URI parameters$
 * @return {Object}
 * The object describing the built URI
 * @param {Object} parameters
 * The parameters provided to build the URI (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 */
function buildPostTokenURI(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
  }: URIBuilderOptions = URI_BUILDER_DEFAULTS
): URIData {
  const __pathParts = ["tokens"];
  const __qs = cleanQuery({});

  return {
    baseURL: __baseURL,
    path: __pathParts.join("/"),
    params: __qs,
  };
}

/**
 * Build all the "postToken" parameters
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} body
 * The request body
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 * @param {string} options.headers
 * Any additional headers to append
 */
function buildPostTokenInput(
  { body }: APITypes.PostToken.Input,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
    headers: __headers = {},
  }: InputBuilderOptions = INPUT_BUILDER_DEFAULTS
): HTTPRequest<APITypes.PostToken.Input["body"]> {
  const __method = APIMethods.postToken;
  const __uriData = buildPostTokenURI({}, { baseURL: __baseURL });

  return {
    method: __method,
    ...__uriData,
    headers: cleanHeaders(
      Object.assign(__headers, {
        "X-API-Version": "0.0.0",
      })
    ),
    body: body,
  };
}

/**
 * Send an email with a token to the customer
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} body
 * The request body
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
async function postToken(
  { body }: APITypes.PostToken.Input,
  options: InputBuilderOptions & Partial<AxiosRequestConfig> = {}
): Promise<Writeable<APITypes.PostToken.Output>> {
  const httpRequest = buildPostTokenInput(
    {
      body,
    },
    options
  );
  const callOptions = {
    baseURL: httpRequest.baseURL,
    method: httpRequest.method,
    url: httpRequest.path,
    headers: httpRequest.headers,
    params: httpRequest.params,
    data: httpRequest.body,
  };

  const response = await axios(
    Object.assign(
      {
        ...callOptions,
        paramsSerializer: querystring.stringify.bind(querystring),
        validateStatus: (status: number) => 200 <= status && 300 > status,
      },
      options || {}
    )
  );

  return {
    status: response.status,
    headers: response.headers,
    body: response.data,
  } as APITypes.PostToken.Output;
}

/**
 * Build the "getPing" URI parameters$
 * @return {Object}
 * The object describing the built URI
 * @param {Object} parameters
 * The parameters provided to build the URI (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 */
function buildGetPingURI(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
  }: URIBuilderOptions = URI_BUILDER_DEFAULTS
): URIData {
  const __pathParts = ["ping"];
  const __qs = cleanQuery({});

  return {
    baseURL: __baseURL,
    path: __pathParts.join("/"),
    params: __qs,
  };
}

/**
 * Build all the "getPing" parameters
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * The options (destructured)
 * @param {string} options.baseURL
 * The base URL of the API
 * @param {string} options.headers
 * Any additional headers to append
 */
function buildGetPingInput(
  _: unknown,
  {
    baseURL: __baseURL = DEFAULT_BASE_URL,
    headers: __headers = {},
  }: InputBuilderOptions = INPUT_BUILDER_DEFAULTS
): HTTPRequest<undefined> {
  const __method = APIMethods.getPing;
  const __uriData = buildGetPingURI({}, { baseURL: __baseURL });

  return {
    method: __method,
    ...__uriData,
    headers: cleanHeaders(
      Object.assign(__headers, {
        "X-API-Version": "0.0.0",
      })
    ),
    body: undefined,
  };
}

/**
 * Checks API's availability.
 * @return {Object}
 * The object describing the built parameters
 * @param {Object} parameters
 * The parameters provided to build them (destructured)
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
async function getPing(
  _: unknown,
  options: InputBuilderOptions & Partial<AxiosRequestConfig> = {}
): Promise<Writeable<APITypes.GetPing.Output>> {
  const httpRequest = buildGetPingInput({}, options);
  const callOptions = {
    baseURL: httpRequest.baseURL,
    method: httpRequest.method,
    url: httpRequest.path,
    headers: httpRequest.headers,
    params: httpRequest.params,
    data: httpRequest.body,
  };

  const response = await axios(
    Object.assign(
      {
        ...callOptions,
        paramsSerializer: querystring.stringify.bind(querystring),
        validateStatus: (status: number) => 200 <= status && 300 > status,
      },
      options || {}
    )
  );

  return {
    status: response.status,
    headers: response.headers,
    body: response.data,
  } as APITypes.GetPing.Output;
}

function cleanQuery(query: QueryParams): QueryParams {
  return Object.keys(query)
    .filter((key) => "undefined" !== typeof query[key])
    .filter(
      (key) =>
        !(query[key] instanceof Array) || 0 !== (query[key] as any[]).length
    )
    .reduce((newQuery, key) => {
      newQuery[key] = query[key];
      return newQuery;
    }, {} as QueryParams);
}

export function cleanHeaders(headers: Headers): Headers {
  return Object.keys(headers)
    .filter((key) => "undefined" !== typeof headers[key])
    .reduce((newHeaders, key) => {
      newHeaders[key] = headers[key];
      return newHeaders;
    }, {} as Headers);
}

export function sortMultipleQuery(a: number, b: number): number {
  return a > b ? 1 : -1;
}

export default API;
