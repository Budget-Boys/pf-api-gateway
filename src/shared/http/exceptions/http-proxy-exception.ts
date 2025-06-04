export class HttpProxyException extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly responseBody: any,
    message?: string,
  ) {
    super(message || `HTTP error with status ${statusCode}`);
  }
}