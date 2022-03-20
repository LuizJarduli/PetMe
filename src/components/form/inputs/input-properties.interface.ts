export interface IInputProperties {
    id: string | number;
    name: string;
    placeholder?: string;
    min?: string;
    max?: string;
    hint?: string;
    alt?: string;
    label?: string;
    readonly?: boolean;
    required?: boolean;
    value?: any;
}