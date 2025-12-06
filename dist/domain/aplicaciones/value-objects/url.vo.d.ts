import { ValueObject } from '../../shared/value-object';
interface UrlProps {
    value: string;
}
export declare class Url extends ValueObject<UrlProps> {
    protected readonly props: UrlProps;
    constructor(value: string);
    get value(): string;
}
export {};
