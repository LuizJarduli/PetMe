import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';
import { InputContainer } from './style';

/**
 * Componente de Input de Texto Descrição do App
 * @author Gustavo Cecato
 * @since 06/2022
 */
export class DescInputComponent extends Input {
    constructor(props: IInputProperties) {
        super(props);
    }
 }