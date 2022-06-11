import { ApiService } from './../api';
import { ILoginResponse, ILoginProperties } from './auth.api.properties';

/**
 * Classe que Realiza requisições referentes a autenticação/Login na API do sistema
 * @author Luiz Miguel
 * @since 04/2022
 */
export class AuthApi {

    /**
     * Efetua o Login na API do sistema
     * @param params 
     */
    public static login(params: ILoginProperties): Promise<ILoginResponse> {
        return new Promise<ILoginResponse>((resolve, reject) => {
            ApiService.getInstance().setMethod('POST').call('http://localhost:8080/login', params)
                .then((response: ILoginResponse) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }
}