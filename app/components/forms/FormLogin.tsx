'use client';

import { AuthenticateRequest } from '@/models/identity/AuthenticateRequest';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

import { Button } from '../buttons/Button';
import { Input } from './Input';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export type LoginFormValues = {
  username: string;
  password: string;
};

export const FormLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register
  } = useForm<LoginFormValues>({ mode: 'onChange' });

  const onFormSubmit = handleSubmit(async (values) => {
    setLoading(true);
    setErrorMessage(undefined);

    try {
      const request: AuthenticateRequest = {
        username: values.username,
        password: values.password
      };
      const res = await fetch('/api/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(request)
      });
      const isSuccess: boolean = await res.json();

      if (!isSuccess) {
        throw 'Looks like there was an issue. Please try again.';
      }

      const nextUrl = searchParams.get('next');
      router.refresh();
      router.replace(nextUrl ?? '/');
    } catch (error: any) {
      if (typeof error === 'string') {
        setErrorMessage(error);
      } else if (typeof error === 'object' && !!error?.message) {
        setErrorMessage(error?.message);
      } else {
        setErrorMessage('Looks like there was an issue. Please try again.');
      }
      setLoading(false);
    }
  });

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        id="username"
        type="email"
        placeholder="Email"
        {...register('username', { required: true, maxLength: 100 })}
        label="Email"
        required
        error={
          !!errors.username ? 'Please check the email you entered.' : undefined
        }
      />
      <Input
        id="login-password"
        type="password"
        {...register('password', { required: true })}
        label="Password"
        required
        error={!!errors.password ? 'Password is required' : undefined}
      />
      {!!errorMessage && (
        <div>
          <ExclamationTriangleIcon
            className="w-5 h-5 fill-red-500 mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-sm italic text-white">{errorMessage}</p>
          <p className="text-sm italic text-white mb-6">
            Still having issues? Reach out to our support team at{' '}
            <a href="mailto:info@lightweaver.com" className="underline">
              info@lightweaver.com
            </a>
            .
          </p>
        </div>
      )}
      <div className="flex items-center justify-end">
        <Link
          href="/forgot-password"
          className="text-white underline text-base"
        >
          Forgot password?
        </Link>
        <Button
          type="submit"
          special={true}
          className="ml-5"
          disabled={loading || !isDirty || !isValid}
        >
          Log In
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
