import { autoService } from 'knifecycle';
import mailjet from 'node-mailjet';
import { Email } from 'node-mailjet';
import type { ENVService } from '@whook/whook';

export type MailjetService = Email.Client;
export type MailjetDependencies = {
  ENV: ENVService;
};

export default autoService(initMailjet);

async function initMailjet({
  ENV,
}: MailjetDependencies): Promise<MailjetService> {
  return mailjet.connect(ENV.MAILJETAPIKEY, ENV.MAILJETSECRETKEY);
}
