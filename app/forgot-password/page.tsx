import { FormForgotPassword } from '../components/forms/FormForgotPassword';
import Container from '../components/layout/Container';

export default async function ForgotPassword() {
  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Container className="max-w-xs py-36 px-0">
        <FormForgotPassword />
      </Container>
    </main>
  );
}
