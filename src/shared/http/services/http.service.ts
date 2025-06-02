import { Injectable } from '@nestjs/common';
import { TRequest } from '../interfaces/http.type';

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

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
      }

      const data = await response.json();

      return data as T;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw new Error('Falha na requisição. Tente novamente mais tarde.');
    }
  }
}
