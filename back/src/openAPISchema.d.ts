declare namespace API {
    export namespace GetOpenAPI {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getOpenAPIResponse200<200>;
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
    export namespace Responses {
        type getOpenAPIResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetOpenAPIResponse200Body0;
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
        export type ResponsesgetOpenAPIResponse200Body0 = NonNullable<{}>;
        export type ResponsesgetPingResponse200Body0 = NonNullable<{
            pong?: "pong";
        }>;
    }
}