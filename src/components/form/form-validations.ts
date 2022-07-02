export const validations: { [key: string]: any} = {
    required : {
        rule: () => /\S/,
        formatter () {
            return 'Campo é obrigatório.';
        }
    },
    numeric: {
        rule: () => /^\d+$/,
        formatter () {
            return 'Campo deve conter apenas números.';
        }
    },
    email: {
        rule: () => /\S+@\S+\.\S+/,
        formatter () {
            return 'Insira um email válido.';
        }
    }
}