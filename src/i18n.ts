import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const lang = localStorage.getItem("church@lang") ?? "pt";

const i18n = createI18n({
  legacy: false,
  inheritLocale: true,
  locale: lang,
  fallbackLocale: lang,
  messages: messages,
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      },
    },
  },
});

export default i18n;
