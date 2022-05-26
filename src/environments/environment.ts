// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //applicationurl:'https://bainesaccountopeningapi.herokuapp.com/OnlineApply',
  //fixeddepositurl:'https://bainesaccountopeningapi.herokuapp.com/OpenFixedDepositAccount',
  //bvnurl:'http://localhost:8080/BVNValidation',

  applicationurl:'https://bainesapi.herokuapp.com/OnlineApply',
  fixeddepositurl:'https://bainesapi.herokuapp.com/OpenFixedDepositAccount',
  bvnurl:'https://bainesapi.herokuapp.com/BVNValidation',

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
