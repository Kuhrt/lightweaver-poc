'use client';

import { CreateForgotPasswordRequest } from '@/models/identity/CreateForgotPasswordRequest';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../buttons/Button';
import { Input } from './Input';

export type ForgotPasswordFormValues = {
  email: string;
};

export type FormForgotPasswordProps = {
  onSuccess?: () => any;
};

export const FormForgotPassword = ({ onSuccess }: FormForgotPasswordProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register
  } = useForm<ForgotPasswordFormValues>({ mode: 'onChange' });

  const onFormSubmit = handleSubmit(async (values) => {
    setLoading(true);
    setErrorMessage(undefined);

    try {
      const request: CreateForgotPasswordRequest = {
        email: values.email
      };
      await fetch('/api/user/forgot-password/create', {
        method: 'POST',
        body: JSON.stringify(request)
      });
    } catch (error) {
    } finally {
      // * There is only success and we don't want to give any idea if something went wrong
      setIsSuccess(true);
      !!onSuccess && onSuccess();
      setLoading(false);
    }
  });

  return (
    <div>
      <h1 className="text-white text-center">
        {isSuccess ? 'Message Received!' : 'Forgot Password'}
      </h1>
      {!isSuccess && (
        <>
          <p className="text-white text-center">
            Bummer! Please provide your email below and our support team will be
            in touch.
          </p>
          <form onSubmit={onFormSubmit}>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register('email', { required: true, maxLength: 100 })}
              label="Email"
              required
              error={
                !!errors.email
                  ? 'Please check the email you entered.'
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
              <Link href="/login" className="text-white underline text-base">
                Log In
              </Link>
              <Button
                type="submit"
                special={true}
                className="ml-5"
                disabled={loading || !isDirty || !isValid}
              >
                Send Request
              </Button>
            </div>
          </form>
          <p className="text-center text-white text-base mt-6">
            Don&apos;t have an account?{' '}
            <a href="#" className="underline">
              Request Access
            </a>
          </p>
        </>
      )}
      {isSuccess && (
        <div className="text-center mt-5">
          <CheckCircleIcon
            className="w-5 h-5 fill-green-500 mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-white text-center italic">
            Success! We have received your request and will be in touch within
            1-2 business days.
          </p>
          <Button className="mt-6">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
