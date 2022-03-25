import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';

/**
 * Componente de Input de Texto Genérico do App
 * @author Luiz Miguel
 * @since 03/2022
 */
export class TextInputComponent extends Input {
    constructor(props: IInputProperties) {
        super(props);
    }
 }