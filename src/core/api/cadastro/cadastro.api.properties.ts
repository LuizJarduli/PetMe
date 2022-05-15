export interface IUserPropertiesModel {
    cpf: string;
    email: string;
    idUsuario: number;
    senha: string;
    username: string;
    pets: { idPet: number; nome: string}[];
    profilePic: string;
}