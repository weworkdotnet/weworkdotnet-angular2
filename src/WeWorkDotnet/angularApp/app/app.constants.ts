import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public static readonly Server = 'http://localhost:5000/';

    /**
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/token.html
     */
    public static readonly TOKEN_ENDPOINT = '/connect/token';

    public static readonly REVOCATION_ENDPOINT = '/connect/revocation';

    /**
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/userinfo.html
     */
    public static readonly USERINFO_ENDPOINT = '/connect/userinfo';

    public static readonly CLIENT_ID = 'AngularSPA';

    /**
     * Resource Owner Password Credential grant.
     */
    public static readonly GRANT_TYPE = 'password';

    /**
     * The Web API, refresh token (offline_access) & user info (openid profile roles).
     */
    public static readonly SCOPE = 'WebAPI offline_access openid profile roles';
}