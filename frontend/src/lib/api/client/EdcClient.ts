/*
 * Copyright 2025 sovity GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Contributors:
 *     sovity - init and continued development
 */
import {
    Configuration,
    type ConfigurationParameters,
    EnterpriseEditionApi,
    type Middleware,
    UIApi,
    UseCaseApi,
} from './generated';
import {buildOAuthMiddleware} from './oauth2/Middleware';
import {type ClientCredentials} from './oauth2/model/ClientCredentials';

/**
 * API Client for our sovity EDC
 */
export interface EdcClient {
    uiApi: UIApi;
    useCaseApi: UseCaseApi;
    enterpriseEditionApi: EnterpriseEditionApi;
}

/**
 * Configure & Build new EDC Client
 * @param opts opts
 */
export function buildEdcClient(opts: EdcClientOptions): EdcClient {
    const middleware: Middleware[] = [];
    let headers: Record<string, string> = {};

    if (opts.clientCredentials) {
        middleware.push(buildOAuthMiddleware(opts.clientCredentials));
    }
    if (opts.managementApiKey) {
        headers = buildApiKeyHeader(opts.managementApiKey);
    }

    const config = new Configuration({
        basePath: opts.managementApiUrl,
        headers,
        credentials: 'same-origin',
        middleware,
        ...opts.configOverrides,
    });

    return {
        uiApi: new UIApi(config),
        useCaseApi: new UseCaseApi(config),
        enterpriseEditionApi: new EnterpriseEditionApi(config),
    };
}

function buildApiKeyHeader(key: string) {
    return {
        'X-Api-Key': key,
    };
}

/**
 * Options for instantiating an EDC API Client
 */
export interface EdcClientOptions {
    managementApiUrl: string;
    managementApiKey?: string;
    clientCredentials?: ClientCredentials;
    configOverrides?: Partial<ConfigurationParameters>;
}
