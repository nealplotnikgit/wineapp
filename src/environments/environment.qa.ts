export const environment = {
  production: true,
  wineServiceURL: 'https://winemanagementservice.cfapps.io',
//  wineServiceURL: 'http://localhost:4200',
  // to build qa, https://blog.angularindepth.com/becoming-an-angular-environmentalist-45a48f7c20d8
// https://medium.com/@balramchavan/separating-production-and-development-http-urls-using-environment-ts-file-in-angular-4c2dd0c5a8b0
// ng build --configuration='qa'
wineAppEnv: 'qa-points to local server, proxies to pcf'
};
