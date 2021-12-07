import { autoHandler } from 'knifecycle';
import type { WhookAPIHandlerDefinition } from '@whook/whook';
import type { LogService } from 'common-services';

export const definition: WhookAPIHandlerDefinition = {
  path: '/phones/brands',
  method: 'get',
  operation: {
    operationId: 'getPhoneBrands',
    summary: 'Provide a list of phones brands',
    tags: [],
    parameters: [],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['id', 'label'],
                properties: {
                  id: { type: 'number', minimum: 1 },
                  label: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
};

type HandlerDependencies = {
  log: LogService;
};

export default autoHandler(getPhoneBrands);

async function getPhoneBrands({
  log,
}: HandlerDependencies): Promise<API.GetPhoneBrands.Output> {
  log('info', '📱 - Sent the phone brands!');
  return {
    status: 200,
    headers: {},
    body: [
      { id: 1, label: 'Fairphone' },
      { id: 2, label: 'Wiko' },
      { id: 3, label: 'Samsung' },
      { id: 4, label: 'Apple' },
      { id: 5, label: 'Huawei' },
      { id: 6, label: 'Xiaomi' },
      { id: 7, label: 'OnePlus' },
      { id: 8, label: 'Autre' },
    ],
  };
}
