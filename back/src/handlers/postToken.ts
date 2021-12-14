import { autoHandler } from 'knifecycle';
import { JWTService } from 'jwt-service';
import { MailjetService } from '../services/mailjet';
import YHTTPError from 'yhttperror';
import type { WhookAPIHandlerDefinition } from '@whook/whook';

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
              phoneBrand: { type: 'number' },
              phoneYear: { type: 'number' },
            },
          },
        },
      },
    },
    responses: {
      204: {
        description: 'Success',
      },
    },
  },
};

type HandlerDependencies = {
  APP_BASE_URL: string;
  mailjet: MailjetService;
  jwtToken: JWTService<API.PostToken.Body>;
};

export default autoHandler(postToken);

async function postToken(
  { APP_BASE_URL, mailjet, jwtToken }: HandlerDependencies,
  { body }: API.PostToken.Input,
): Promise<API.PostToken.Output> {
  const token = await jwtToken.sign(body);
  const encodedToken = encodeURIComponent(token.token);

  const request = mailjet.post('send', { version: 'v3.1' }).request({
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
        TextPart: `Bonjour ${body.firstName} ${body.givenName},
  
Merci pour votre confiance en PhoneCoop :)
Veuillez trouver le lien vers votre QR code :

${APP_BASE_URL}/receipt?token=${encodedToken}                

Cordialement,
L'équipe de PhoneCoop`,

        CustomID: 'AppGettingStartedTest',
      },
    ],
  });

  try {
    await request;
  } catch (err) {
    throw YHTTPError.wrap(err, 500, 'E_MAILJET');
  }

  return {
    status: 204,
  };
}
