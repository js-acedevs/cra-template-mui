import 'dayjs/locale/nb';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import relativeTime from 'dayjs/plugin/relativeTime';

// initialize localization and plugins
dayjs.extend(customParseFormat);
dayjs.extend(isLeapYear);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('nb');

export default dayjs;
