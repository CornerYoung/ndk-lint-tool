import { Options } from '@nuofe/ndk-utilities';
interface Dependencies {
    [name: string]: string;
}
export declare const remove: ({ ...dependencies }: Dependencies) => {
    [name: string]: string;
};
export declare const getName: (type: string) => string;
export declare const check: (options: Options.Options) => Promise<void>;
export {};
