import { ValueObject } from '../../shared/value-object';
interface CategoriaProps {
    value: string;
}
export declare class Categoria extends ValueObject<CategoriaProps> {
    protected readonly props: CategoriaProps;
    constructor(value: string);
    get value(): string;
}
export {};
