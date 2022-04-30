import { LoadingComponent } from '../../components/utility-components/loading.component';

export class LoadingService {
    constructor() { }

    /**
     * Retorna a instância da classe
     */
    public static getInstance(): LoadingService {
        return new LoadingService();
    }

    /**
     * Exibe o loading na página
     */
    public show(): JSX.Element {
        return(
            <LoadingComponent />
        )
    }
}