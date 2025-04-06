import { connectWithPlaid } from '@/app/actions/plaid';
import { FormMessage, Message } from '@/components/form-message';
import LinkSetup from '@/components/link-setup';

export default async function GetStarted(props: {
  searchParams: Promise<Message>;
}) {
  const tokenResult = await connectWithPlaid();
  return (
    <main className="flex-1 flex flex-col gap-12 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-200">
          Connect with Plaid
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200">
          <i>Bring Receipts</i> uses your spending habits to match you with your
          soulmate.
        </p>
        <div className="mt-8">
          {tokenResult.result && <LinkSetup linkToken={tokenResult.result} />}
        </div>
        <div>
          <FormMessage message={{ message: tokenResult.error || '' }} />
        </div>
        <p className="mt-8">
          Note: Since this is only a demo, it uses a pretend connection, and
          does not request your actual bank transactions
        </p>
      </div>
    </main>
  );
}
