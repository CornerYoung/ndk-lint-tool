export declare type PackageType = 'app' | 'web' | 'component' | 'library' | 'tool';
export declare type PackageLanguage = 'es' | 'ts';
export interface NDKConfig {
    type: PackageType;
    language: PackageLanguage;
}
export declare const init: () => Promise<NDKConfig>;
