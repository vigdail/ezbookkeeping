import { defineStore } from 'pinia';

import currencyConstants from '@/consts/currency.js';
import datetimeConstants from '@/consts/datetime.js';

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        defaultSetting: {
            language: '',
            currency: currencyConstants.defaultCurrency,
            firstDayOfWeek: datetimeConstants.defaultFirstDayOfWeek,
            longDateFormat: 0,
            shortDateFormat: 0,
            longTimeFormat: 0,
            shortTimeFormat: 0
        }
    }),
    actions: {
        updateLocalizedDefaultSettings({ defaultCurrency, defaultFirstDayOfWeek }) {
            this.defaultSetting.currency = defaultCurrency;
            this.defaultSetting.firstDayOfWeek = defaultFirstDayOfWeek;
        }
    }
});