// The MIT License (MIT)
// 
// Copyright (c) Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

var Apps = require('./Apps');
var TypeUtils = require("utils/types");

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
     * A custom value for the callback. 
     */
    tag?: any;
    
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

    /**
     * The value from the config.
     */
    tag?: any;
}

/**
 * Returns the installed list of apps.
 * 
 * @param {Function} callback The callback.
 * @param {IGetInstalledAppsConfig} [cfg] The custom configuration.
 */
export function getInstalledApps(callback: (IGetInstalledAppsResult) => void,
                                 cfg?: IGetInstalledAppsConfig) {
    var c: any = cfg;
    
    if (TypeUtils.isNullOrUndefined(c)) {
        c = {};
    }

    if (TypeUtils.isNullOrUndefined(c.icon)) {
        c.icon = {};
    }

    if (TypeUtils.isNullOrUndefined(c.icon.format)) {
        c.icon.format = 0;
    }

    if (TypeUtils.isNullOrUndefined(c.icon.quality)) {
        c.icon.quality = 100;
    }

    if (TypeUtils.isNullOrUndefined(c.withIcons)) {
        c.withIcons = false;
    }

    Apps.getInstalledListOfApps(callback, cfg);
}
