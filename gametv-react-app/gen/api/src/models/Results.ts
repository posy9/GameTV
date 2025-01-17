/* tslint:disable */
/* eslint-disable */
/**
 * GameTV service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Results
 */
export interface Results {
    /**
     * 
     * @type {string}
     * @memberof Results
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Results
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof Results
     */
    temperature?: string;
}

export function ResultsFromJSON(json: any): Results {
    return ResultsFromJSONTyped(json, false);
}

export function ResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Results {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'temperature': !exists(json, 'temperature') ? undefined : json['temperature'],
    };
}

export function ResultsToJSON(value?: Results | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'location': value.location,
        'temperature': value.temperature,
    };
}


