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
            ApiService.getInstance().setMethod('POST').call('http://localhost:8080/usuarios', params)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Recupera o usuário pelo username
     *
     * @param params 
     */
     public static get(userName: string): Promise<IUserPropertiesModel> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('GET').call(`http://localhost:8080/usuarios/${userName}`)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

     /**
      * Recupera todos os usuários
      *
      * @param params 
      */
      public static getAll(): Promise<IUserPropertiesModel[]> {
        return new Promise<IUserPropertiesModel[]>((resolve, reject) => {
            ApiService.getInstance().setMethod('GET').call('http://localhost:8080/usuarios')
                .then((response: IUserPropertiesModel[]) => {
                    const maxOfFive: boolean = response?.length > 5;
                    resolve( maxOfFive ? response.slice(-5) : response);
                })
                .catch((error: any) => reject(error));
        });
    }
}