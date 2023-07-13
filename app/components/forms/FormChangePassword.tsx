'use client';

import { ResetForgottenPasswordRequest } from '@/models/identity/ResetForgottenPasswordRequest';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../buttons/Button';
import { Input } from './Input';

export type ChangePasswordFormValues = {
  password: string;
};

export type FormChangePasswordProps = {
  requestId: string;
};

export const FormChangePassword = ({ requestId }: FormChangePasswordProps) => {
  console.info('RequestId:', requestId)
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register
  } = useForm<ChangePasswordFormValues>({ mode: 'onChange' });

  const onFormSubmit = handleSubmit(async (values) => {
    setLoading(true);
    setErrorMessage(undefined);

    try {
      const request: ResetForgottenPasswordRequest = {
        newPassword: values.password,
        requestId
      };
      const res = await fetch('/api/user/change-password', {
        method: 'POST',
        body: JSON.stringify(request)
      });
      const isSuccess: boolean = await res.json();

      if (!isSuccess) {
        throw 'Looks like there was an issue. Please try again.';
      }

      router.push('/login');
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
        id="password"
        type="password"
        placeholder="Password"
        {...register('password', { required: true, maxLength: 100 })}
        label="New Password"
        required
        error={
          !!errors.password
            ? 'Please check the password you entered.'
            : undefined
        }
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
        <Button
          type="submit"
          special={true}
          className="ml-5"
          disabled={loading || !isDirty || !isValid}
        >
          Save New Password
        </Button>
      </div>
    </form>
  );
};
