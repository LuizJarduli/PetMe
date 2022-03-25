export const validations: { [key: string]: any} = {
    required : {
        rule: () => /\S/,
        formatter (campo: string) {
            return `${campo} é Obrigatório.`;
        }
    },
    numeric: {
        rule: () => /^\d+$/,
        formatter (campo: string) {
            return `${campo} deve conter apenas números.`;
        }
    }
  }