import { ApiService } from './../api';
import { IUserPropertiesModel, IUserPetPropertiesModel } from './cadastro.api.properties';

/**
 * Classe que Realiza requisições referentes a autenticação/Login na API do sistema
 * @author Luiz Miguel
 * @since 04/2022
 */
export class userApi {
    /**
     * Efetua o Login na API do sistema
     * @param params payload da requisição
     */
    public static create(params: Partial<IUserPropertiesModel>): Promise<IUserPropertiesModel> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('POST').call('http://localhost:8080/usuarios', params)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Cadastra um pet no sistema
     * @param idUser id do usuário que será associado ao pet
     * @param params dados do pet
     */
    public static createPet(idUser: number, params: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            ApiService.getInstance().setMethod('POST').call(`http://localhost:8080/usuarios/${idUser}/pets`, params)
                .then((response: any) => resolve(response))
                .catch((error: any) => reject(error));
        })
    }

    /**
     * Efetua a doação de um pet (exclusão lógica)
     * @param idUser id do usuário 
     * @param idPet id do pet
     */
    public static donatePet(idUser: number, idPet: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            ApiService.getInstance().setMethod('DELETE').call(`http://localhost:8080/usuarios/${idUser}/pets/${idPet}`)
                .then((response: any) => resolve(response))
                .catch((error: any) => reject(error));
        })
    }

    /**
     * Recupera o usuário pelo username
     *
     * @param params payload da requisição
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
      * @param params payload da requisição
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

    /**
     * Edita os dados do usuário
     *
     * @param id id do usuario
     * @param params payload da requisição
     */
    public static editData(id: number, params: any = {}): Promise<IUserPropertiesModel> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('PUT').call(`http://localhost:8080/usuarios/${id}`, params)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Edita os dados do pet
     *
     * @param id id do usuario
     * @param idPet id do pet
     * @param params payload da requisição
     */
     public static editPetData(id: number, idPet: number, params: any = {}): Promise<IUserPetPropertiesModel> {
        return new Promise<IUserPetPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('PUT').call(`http://localhost:8080/usuarios/${id}/pets/${idPet}`, params)
                .then((response: IUserPetPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Edita a senha do usuário
     *
     * @param id id do usuario
     * @param params payload da requisição
     */
    public static editPassword(id: number, params: any = {}): Promise<any> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('PUT').call(`http://localhost:8080/usuarios/${id}/senha`, params)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Edita a foto de perfil do usuário
     *
     * @param id id do usuario
     * @param params payload da requisição
     */
    public static editProfilePic(id: number, params: any = {}): Promise<any> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('PUT').call(`http://localhost:8080/usuarios/${id}/foto`, params)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Desativa o perfil do usuário
     *
     * @param id id do usuario
     */
     public static deactivateAccount(id: number): Promise<any> {
        return new Promise<IUserPropertiesModel>((resolve, reject) => {
            ApiService.getInstance().setMethod('DELETE').call(`http://localhost:8080/usuarios/${id}`)
                .then((response: IUserPropertiesModel) => resolve(response))
                .catch((error: any) => reject(error));
        });
    }

    /**
     * Recuperação de senha do usuário, é feito um POST para atualizar esses dados.
     *
     * @param params dados necessário para requisição de recuperação de senha na API.
     */
    public static renewPassword(params: any = {}): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            ApiService.getInstance().setMethod('POST').call('http://localhost:8080/usuarios/recoveryPassword', params)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        })
    }
}