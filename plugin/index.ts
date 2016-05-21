
export interface IInstalledApp {
    displayName: string;
    name: string;
    version: IInstalledAppVersion;
    icon?: string;
}

export interface IInstalledAppVersion {
    code: number;
    name: string;
}

export interface IGetInstalledAppsConfig {
    icon?: IGetInstalledAppsIconConfig;    
    withIcons?: boolean;
}

export interface IGetInstalledAppsIconConfig {
    format?: number;
    quality?: number;
}

export interface IGetInstalledAppsResult {
    apps: IInstalledApp[];
}
