import { origins } from '../config';

export const verifyBody = (args) => {
  return args.reduce((accum, cur) => {
    return accum && !!cur;
  }, true);
};

export const verifyOrigin = (origin) => {
  return origins.indexOf(origin) !== -1;
};
