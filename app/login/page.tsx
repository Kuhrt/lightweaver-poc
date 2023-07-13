import FormLogin from '../components/forms/FormLogin';
import Container from '../components/layout/Container';

export default async function Login() {
  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      <Container className='max-w-xs py-36 px-0'>
        <h1 className="text-white text-center">Log In</h1>
        <p className="text-white text-center">
          Please provide your email and password below.
        </p>
        <FormLogin />
        <p className='text-center text-white text-base mt-6'>
          Don&apos;t have an account? <a href='#' className='underline'>Request Access</a>
        </p>
      </Container>
    </main>
  );
}
