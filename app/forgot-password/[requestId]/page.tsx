import { FormChangePassword } from '@/app/components/forms/FormChangePassword';
import { ValidateForgotPasswordRequest } from '@/models/identity/ValidateForgotPasswordRequest';
import { IdentityApi } from '@/services/api/IdentityApi';
import Container from '../../components/layout/Container';

type ForgotPasswordChangeProps = {
  params: {
    requestId: string;
  };
};

export default async function ForgotPasswordChange({
  params: { requestId }
}: ForgotPasswordChangeProps) {
  const request: ValidateForgotPasswordRequest = {
    requestId
  };
  const identityApi = new IdentityApi();
  const hasValidToken = await identityApi.validateForgotPasswordRequest(
    request
  );

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Container className="max-w-xs py-36 px-0">
        <h1 className="text-white text-center">New Password</h1>
        <p className="text-white text-center">
          {hasValidToken
            ? 'Please provide a new password below'
            : 'Your token is not valid.'}
        </p>
        {hasValidToken && <FormChangePassword requestId={requestId} />}
      </Container>
    </main>
  );
}
