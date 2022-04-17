import { createRef, ReactNode } from 'react';
import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';
import InputMask, { ReactInputMask } from 'react-input-mask';

/**
 * Input de CPF do App
 * @author Luiz Miguel
 * @since 04/2022
 */
export class CPFInputComponent extends Input {
    constructor(props: IInputProperties) {
        super(props);
        this.input = createRef<ReactInputMask>();
    }

    /**
     * Efetua validações customizadas para os inputs
     */
    protected customValidate(): void {
        const inputValue: string = this.input.current?.value?.replace(/[^\d]+/g, '');
        if (!this.validateCPF(inputValue) && inputValue.length > 10) {
            this.setFormState({ errors: { [this.props?.name]: 'CPF inválido'}});
        }
    }

    /**
     * Função que valida o CPF matematicamente
     * @param cpf valor inserido
     * @see https://www.geradorcpf.com/javascript-validar-cpf.htm
     */
    private validateCPF(cpf: string): boolean {
            if(cpf == '') return false;	
            // Elimina CPFs invalidos conhecidos	
            if (cpf.length != 11 || 
                cpf == '00000000000' || 
                cpf == '11111111111' || 
                cpf == '22222222222' || 
                cpf == '33333333333' || 
                cpf == '44444444444' || 
                cpf == '55555555555' || 
                cpf == '66666666666' || 
                cpf == '77777777777' || 
                cpf == '88888888888' || 
                cpf == '99999999999')
                    return false;		
            // Valida 1o digito	
            let add: number = 0;	
            for (let i=0; i < 9; i ++)		
                add += parseInt(cpf.charAt(i)) * (10 - i);	
                let rev: number = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(9)))		
                    return false;		
            // Valida 2o digito	
            add = 0;	
            for (let i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpf.charAt(10)))
                return false;		
            return true;   
    }
    /**
     * Recupera o input, possibilitando sobrescrevê-lo pelas classes herdeiras (extend)
     * 
     * **OBS: Precisa retornar o HTML do input para não quebrar o funcionamento do componente**
     */
    protected getInput(): ReactNode {
        return(
            <InputMask 
                {...this.props}
                ref={this.input}
                onChange={event => this.context.setFields(event, this.field)}
                onKeyUp={() => this.validateInput()}
                mask={'999.999.999-99'}/>
        )
    }
}