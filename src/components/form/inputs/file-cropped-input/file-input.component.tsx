import { createRef, ReactNode } from 'react';
import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';
import CropperComponent from './file-cropper-input.component';

export class FileInputComponent extends Input {
    constructor(props: IInputProperties) {
        super(props)
        this.handleCropped.bind(this);
    }

    private async handleCropped(file: string): Promise<void> {
        const oldStateData: any = this.context?.submitData;
        this.setFormState({ 
            submitData: { 
                ...oldStateData,
                fotoPerfil: { 
                    value: file,
                    name: this.props?.name,
                }
            }
        });
    }

    protected getInput(): ReactNode {
        return (
            <CropperComponent 
                onCropped={(e: string) => this.handleCropped(e)}/>
        );
    }
}