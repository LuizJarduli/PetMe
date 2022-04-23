import { ApiService } from './../api';
import { IUserPropertiesModel } from './cadastro.api.properties';

/**
 * Classe que Realiza requisições referentes a autenticação/Login na API do sistema
 * @author Luiz Miguel
 * @since 04/2022
 */
export class userApi {

    /**
     * Efetua o Login na API do sistema
     * @param params 
     */
    public static create(params: Partial<IUserPropertiesModel>): Promise<IUserPropertiesModel> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('POST').call('http://26.176.192.89:8080/usuarios', params)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }
}