/* eslint-disable */
/**
 * sovity EDC API Wrapper
 * sovity\'s EDC API Wrapper contains a selection of APIs for multiple consumers, e.g. our EDC UI API, our generic Use Case API, our Commercial Edition APIs, etc. We bundled these APIs, so we can have an easier time generating our API Client Libraries.
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: contact@sovity.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A value either inlined or to be fetched from the Vault. Raw secret values will land in the database and will be retrievable via the Eclipse EDC Management API.
 * @export
 * @interface SecretValue
 */
export interface SecretValue {
    /**
     * Secret Name / Vault Key Name.
     * @type {string}
     * @memberof SecretValue
     */
    secretName?: string;
    /**
     * Raw inline Value.
     * @type {string}
     * @memberof SecretValue
     */
    rawValue?: string;
}

/**
 * Check if a given object implements the SecretValue interface.
 */
export function instanceOfSecretValue(value: any): value is SecretValue {
    return true;
}

export function SecretValueFromJSON(json: any): SecretValue {
    return SecretValueFromJSONTyped(json, false);
}

export function SecretValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretValue {
    if (json == null) {
        return json;
    }
    return {
        
        'secretName': json['secretName'] == null ? undefined : json['secretName'],
        'rawValue': json['rawValue'] == null ? undefined : json['rawValue'],
    };
}

export function SecretValueToJSON(json: any): SecretValue {
    return SecretValueToJSONTyped(json, false);
}

export function SecretValueToJSONTyped(value?: SecretValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secretName': value['secretName'],
        'rawValue': value['rawValue'],
    };
}

