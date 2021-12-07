import { autoHandler } from 'knifecycle';
import type { ENVService, WhookAPIHandlerDefinition } from '@whook/whook';
import { JWTService } from 'jwt-service';
import mailjet from 'node-mailjet';

export const definition: WhookAPIHandlerDefinition = {
  path: '/tokens',
  method: 'post',
  operation: {
    operationId: 'postToken',
    summary: 'Send an email with a token to the customer',
    tags: [],
    parameters: [],
    requestBody: {
      description: 'Return of the form',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: [
              'firstName',
              'givenName',
              'email',
              'tel',
              'phoneBrand',
              'phoneYear',
            ],
            properties: {
              firstName: { type: 'string' },
              givenName: { type: 'string' },
              email: { type: 'string' },
              tel: { type: 'string' },
              phoneBrand: { type: 'string' },
              phoneYear: { type: 'string' },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  },
};

type HandlerDependencies = {
  ENV: ENVService;
  jwtToken: JWTService<API.PostToken.Body>;
};

export default autoHandler(postToken);

async function postToken(
  { ENV, jwtToken }: HandlerDependencies,
  { body }: API.PostToken.Input,
): Promise<API.PostToken.Output> {
  const token = await jwtToken.sign(body);
  const encodedtoken = encodeURIComponent(token.token);

  const mailjetclient = mailjet.connect(
    ENV.MAILJETAPIKEY,
    ENV.MAILJETSECRETKEY,
  );
  const request = mailjetclient.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'simon.brocart@enigma-school.com',
          Name: 'PhoneCoop',
        },
        To: [
          {
            Email: body.email,
            Name: body.firstName + ' ' + body.givenName,
          },
        ],
        Subject: 'Votre accusé de récéption',
        TextPart: `Bonjour ${body.firstName} ${body.givenName}
                    
                     Merci pour votre confiance en PhoneCoop :)
                     Veuillez trouver le lien vers votre QR code : 
                     
                     http://app.phone.localhost:3000/receipt?${encodedtoken}                
                                        
                    Cordialement,
                    L'équipe de PhoneCoop`,

        CustomID: 'AppGettingStartedTest',
      },
    ],
  });
  const result = await request;

  return {
    status: 200,
    headers: {},
    body: '',
  };
}
