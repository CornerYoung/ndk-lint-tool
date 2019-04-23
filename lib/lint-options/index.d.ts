import { Options } from '@nuofe/ndk-utilities';
import * as Config from './config';
export interface PackageInfo extends Options.PackageInfo {
    __updateLint?: true;
    scripts?: {
        [name: string]: string | undefined;
        lint?: string;
    };
    eslintConfig?: {
        [name: string]: any;
    };
    dependencies?: {
        [name: string]: string;
    };
    devDependencies?: {
        [name: string]: string;
    };
}
export interface Options extends Options.Options {
    ndkConfig: Config.NDKConfig;
    ndkConfigPath: string;
    packageInfo: PackageInfo;
}
export declare const init: (config?: Options.Config) => Promise<Options>;
