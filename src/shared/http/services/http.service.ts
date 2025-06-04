import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TRequest } from '../interfaces/http.type';
import { HttpProxyException } from '../exceptions/http-proxy-exception';

@Injectable()
export class HttpService {
  public async proxy<T>(
    url: string,
    method: TRequest,
    headers: Record<string, string>,
    body?: Record<string, unknown>,
  ): Promise<T> {
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
      requestOptions.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, requestOptions);

      const isJson = response.headers.get('content-type')?.includes('application/json');

      const responseBody = isJson ? await response.json() : await response.text();

      if (!response.ok) {
        throw new HttpProxyException(
          response.status,
          responseBody,
          `Erro ao chamar ${method} ${url}`,
        );
      }

      return responseBody as T;
    } catch (error) {
      if (error instanceof HttpProxyException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro interno ao realizar requisição HTTP.');
    }
  }
}