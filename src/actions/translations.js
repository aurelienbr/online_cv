// @flow

import type { CHANGE_LOCAL_ACTION } from '../reducers/Locale';

export const changeLocale = (locale: string): CHANGE_LOCAL_ACTION => ({
  payload: locale,
  type: 'CHANGE_LOCAL'
});
