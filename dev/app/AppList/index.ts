
/**
 * Describes an installed app.
 */
export interface IInstalledApp {
    /**
     * Gets the display name.
     */
    displayName: string;
    
    /**
     * Gets the internal (package) name.
     */
    name: string;
    
    /**
     * Gets the version information.
     */
    version: IInstalledAppVersion;
    
    /**
     * Gets the icon as data URL.
     */
    icon?: string;
}

/**
 * Describes an object that stores information about
 * the version of an installed app.
 */
export interface IInstalledAppVersion {
    /**
     * Gets the version code (Android onky)
     */
    code: number;
    
    /**
     * Gets the version name, like 1.0.2
     */
    name: string;
}

/**
 * Describes an object that stores configuration data
 * for loading the list of installed apps.
 */
export interface IGetInstalledAppsConfig {
    /**
     * Gets the configuration for receiving icons.
     */
    icon?: IGetInstalledAppsIconConfig;
    
    /**
     * Defines if icons should also be loaded or not.
     */
    withIcons?: boolean;
}

/**
 * Describes an object that stores information
 * for the configuration of receiving icons.
 */
export interface IGetInstalledAppsIconConfig {
    /**
     * Gets the format (1 = JPEG); Default: PNG
     */
    format?: number;
    
    /**
     * Gets the quality (0 to 100)
     */
    quality?: number;
}

/**
 * Describes an object that stores an 'get installed apps' result.
 */
export interface IGetInstalledAppsResult {
    /**
     * Stores the list of apps.
     */
    apps: IInstalledApp[];
}
