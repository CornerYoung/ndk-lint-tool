import { Options } from '@nuofe/ndk-utilities';
export interface PackageInfo extends Options.PackageInfo {
    __updateLint?: true;
}
export interface Options extends Options.Options {
    packageInfo: PackageInfo;
}
export declare const init: (config?: Options.Config) => Promise<Options>;
