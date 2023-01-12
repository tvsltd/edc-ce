import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface AppConfig {
  dataManagementApiUrl: string;
  originator: string;
  catalogUrl: string;
  storageAccount: string;
  apiKey: string;
  storageExplorerLinkTemplate: string;
  logoutUrl: string;
  theme: string;
  originatorOrganization: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config?: AppConfig;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http
      .get<AppConfig>('/assets/config/app.config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  getConfig(): AppConfig | undefined {
    return this.config;
  }
}
