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
 * Available and used resources of a connector.
 * @export
 * @interface ConnectorLimits
 */
export interface ConnectorLimits {
    /**
     * Current amount of active consuming contract agreements.
     * @type {number}
     * @memberof ConnectorLimits
     */
    numActiveConsumingContractAgreements: number;
    /**
     * Maximum amount of active consuming contract agreements. A value of 'null' or a negative value means that there are no limit.
     * @type {number}
     * @memberof ConnectorLimits
     */
    maxActiveConsumingContractAgreements?: number;
}

/**
 * Check if a given object implements the ConnectorLimits interface.
 */
export function instanceOfConnectorLimits(value: any): value is ConnectorLimits {
    if (!('numActiveConsumingContractAgreements' in value) || value['numActiveConsumingContractAgreements'] === undefined) return false;
    return true;
}

export function ConnectorLimitsFromJSON(json: any): ConnectorLimits {
    return ConnectorLimitsFromJSONTyped(json, false);
}

export function ConnectorLimitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorLimits {
    if (json == null) {
        return json;
    }
    return {
        
        'numActiveConsumingContractAgreements': json['numActiveConsumingContractAgreements'],
        'maxActiveConsumingContractAgreements': json['maxActiveConsumingContractAgreements'] == null ? undefined : json['maxActiveConsumingContractAgreements'],
    };
}

export function ConnectorLimitsToJSON(json: any): ConnectorLimits {
    return ConnectorLimitsToJSONTyped(json, false);
}

export function ConnectorLimitsToJSONTyped(value?: ConnectorLimits | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'numActiveConsumingContractAgreements': value['numActiveConsumingContractAgreements'],
        'maxActiveConsumingContractAgreements': value['maxActiveConsumingContractAgreements'],
    };
}

