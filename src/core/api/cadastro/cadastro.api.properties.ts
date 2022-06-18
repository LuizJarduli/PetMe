export interface IUserPropertiesModel {
    cpf: string;
    email: string;
    idUsuario: number;
    senha: string;
    username: string;
    pets: IUserPetPropertiesModel[];
    fotoPerfil: string;
}

export interface IUserPetPropertiesModel {
    idPet: number;
    numero: string;
    nome: string;
    estado: string;
    cidade: string;
    descricao: string;
    fotoPet: string[];
}