import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';

/**
 * Componente de Input de Texto Genérico do App
 * @author Gustavo Cecato
 * @since 06/2022
 */
export class TextInputComponent extends Input {
    constructor(props: IInputProperties) {
        super(props);
    }
 }