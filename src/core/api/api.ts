import { ApiMethod, KeyValue } from './api-properties.interface';

/**
 * Classe responsável pelas chamadas de API do sistema
 * @author Luiz Miguel
 * @since 04/2022
 * @see https://rossbulat.medium.com/advanced-typescript-by-example-api-service-manager-7ea591f5eba8
 */
export class ApiService {
    constructor (private _authToken: string) { }
    private _method: ApiMethod = 'POST';
    private _headers: string[][] = [];
    public static endpoint: string;

    get authToken(): string {
        return this._authToken;
    }

    set authToken(token: string) {
        this._authToken = token;
    }

    get headers(): string[][] {
        return this._headers;
    }

    /**
     * Limpa os cabeçalhos (Headers) da requisição
     */
    public resetHeaders(): void {
        this._headers = [];
    }

    /**
     * Seta os cabeçalhos de busca para uma requisição na API
     * @param headers array de chaves de valores para o cabeçalho
     */
    public setHeaders(headers: KeyValue<string, string>[]): ApiService {
        for (const i in headers) {
            if (headers[i].hasOwnProperty('key') && headers[i].hasOwnProperty('value')) {
                this._headers.push([
                    headers[i].key, 
                    headers[i].value
                ]);
            }
        }
        return this;
    }

    /**
     * Seta o Método REST que será usado na requisição na API
     * @param newMethod Método REST, podendo ser GET | POST | PUT | DELETE
     */
    public setMethod(newMethod: ApiMethod): ApiService {
        this._method = newMethod;
        return this;
    }

    /**
     * Retorna o padrão do body na requisição
     * @param body 
     */
    public request<T>(body: T): RequestInit {
        return {
            headers: this._headers,
            method: this._method,
            body: JSON.stringify(body),
        }
    }

    /**
     * Executa a chamada na API
     * @param endpoint endpoint no qual será feito a chamada
     * @param params body da requisição 
     */
    public call(endpoint: string, params: any = {}): Promise<any> {
        return fetch(endpoint, this.request(params))
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => Promise.reject(`Desculpe, ocorreu um erro interno. Erro: ${error}`))
    }
}