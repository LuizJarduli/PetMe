import { IUserPetPropertiesModel } from './../cadastro/cadastro.api.properties';
import { ApiService } from './../api';

/**
 * Classe que Realiza requisições referentes a autenticação/Login na API do sistema
 * @author Luiz Miguel
 * @since 06/2022
 */
export class FeedApi {

    /**
     * Recupera a lista de pets do sistema
     * @param params 
     */
    public static getList(params: any = {}): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            ApiService.getInstance().setMethod('GET').call('http://localhost:8080/usuarios/pets', params)
                .then((response: any) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Efetua o like ou deslike no pet
     *
     * @param idPet id do pet
     * @param idUser id do usuário
     * @returns 
     */
    public static like(idPet: number, idUser: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            ApiService.getInstance().setMethod('POST').call(`http://localhost:8080/usuarios/${idUser}/pets/${idPet}/curtir`)
                .then((response: any) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }
}