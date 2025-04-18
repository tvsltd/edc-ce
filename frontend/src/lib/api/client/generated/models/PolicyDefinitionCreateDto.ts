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
import type { UiPolicyExpression } from './UiPolicyExpression';
import {
    UiPolicyExpressionFromJSON,
    UiPolicyExpressionFromJSONTyped,
    UiPolicyExpressionToJSON,
    UiPolicyExpressionToJSONTyped,
} from './UiPolicyExpression';

/**
 * Create a Policy Definition
 * @export
 * @interface PolicyDefinitionCreateDto
 */
export interface PolicyDefinitionCreateDto {
    /**
     * Policy Definition ID
     * @type {string}
     * @memberof PolicyDefinitionCreateDto
     */
    policyDefinitionId: string;
    /**
     * Policy Expression
     * @type {UiPolicyExpression}
     * @memberof PolicyDefinitionCreateDto
     */
    expression: UiPolicyExpression;
}

/**
 * Check if a given object implements the PolicyDefinitionCreateDto interface.
 */
export function instanceOfPolicyDefinitionCreateDto(value: any): value is PolicyDefinitionCreateDto {
    if (!('policyDefinitionId' in value) || value['policyDefinitionId'] === undefined) return false;
    if (!('expression' in value) || value['expression'] === undefined) return false;
    return true;
}

export function PolicyDefinitionCreateDtoFromJSON(json: any): PolicyDefinitionCreateDto {
    return PolicyDefinitionCreateDtoFromJSONTyped(json, false);
}

export function PolicyDefinitionCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyDefinitionCreateDto {
    if (json == null) {
        return json;
    }
    return {
        
        'policyDefinitionId': json['policyDefinitionId'],
        'expression': UiPolicyExpressionFromJSON(json['expression']),
    };
}

export function PolicyDefinitionCreateDtoToJSON(json: any): PolicyDefinitionCreateDto {
    return PolicyDefinitionCreateDtoToJSONTyped(json, false);
}

export function PolicyDefinitionCreateDtoToJSONTyped(value?: PolicyDefinitionCreateDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'policyDefinitionId': value['policyDefinitionId'],
        'expression': UiPolicyExpressionToJSON(value['expression']),
    };
}

