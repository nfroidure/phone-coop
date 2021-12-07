declare namespace API {
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
        export type Output = Responses.$200;
        export type Input = {
            readonly body: Body;
        };
        export namespace Responses {
            export type $200 = Components.Responses.postTokenResponse200<200>;
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
        export type PostTokenRequestBody = Components.Schemas.RequestBodiespostTokenRequestBodyBody0;
    }
    export namespace Responses {
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
        type postTokenResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsespostTokenResponse200Body0;
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
            phoneBrand: NonNullable<string>;
            phoneYear: NonNullable<string>;
        }>;
        export type ResponsesgetOpenAPIResponse200Body0 = NonNullable<{}>;
        export type ResponsesgetPhoneBrandsResponse200Body0 = NonNullable<NonNullable<{
            id: NonNullable<number>;
            label: NonNullable<string>;
        }>[]>;
        export type ResponsespostTokenResponse200Body0 = NonNullable<string>;
        export type ResponsesgetPingResponse200Body0 = NonNullable<{
            pong?: "pong";
        }>;
    }
}