import { ValueObject } from '../../shared/value-object';
interface VersionIdProps {
    value: string;
}
export declare class VersionId extends ValueObject<VersionIdProps> {
    protected readonly props: VersionIdProps;
    private constructor();
    get value(): string;
    static new(): VersionId;
    static from(value: string): VersionId;
}
export {};
