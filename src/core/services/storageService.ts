import { IUserPropertiesModel } from '../api/cadastro/cadastro.api.properties';

/**
 * Service de armazenamento do app, guarda infos no sessionStorage
 * @author Luiz Miguel
 * @since 05/2022
 */
export class StorageService {
    constructor() { }

    /**
     * Retorna a instância da classe
     */
    public static getInstance(): StorageService {
        return new StorageService();
    }

    /**
     * Armazena os dados do usuário logado
     *
     * @param userData usuário logado
     */
    public setUser(userData: any) {
        sessionStorage.setItem('userLogged', JSON.stringify(userData));
    }

    /**
     * Recupera os dados do usuário logado
     */
    public getUser(): IUserPropertiesModel {
        return JSON.parse(sessionStorage.getItem('userLogged') as string);
    }
}