export const isApiResponseSuccessful = (statusCode: number) =>
  statusCode >= 200 && statusCode < 300
