import { Trans } from '@lingui/macro';
import { I18nProvider, useLingui } from '@lingui/react';
import { i18n } from '@lingui/core';
import { it, en } from 'make-plural/plurals';
import './App.css';

const LOCALE_IT = 'it';
const LOCALE_EN = 'en';

i18n.loadLocaleData(LOCALE_IT, { plurals: it });
i18n.loadLocaleData(LOCALE_EN, { plurals: en });

async function activateLocale(locale) {
  const { messages } = await import(`./locales/${locale}/messages.mjs`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

activateLocale(LOCALE_EN);

function JsLingui() {
  const { i18n } = useLingui();

  return (
    <div>
      current locale: {i18n.locale}.<br />{' '}
      <button onClick={() => activateLocale(LOCALE_EN)}>change to en</button>{' '}
      <button onClick={() => activateLocale(LOCALE_IT)}>change to it</button>
      <br />
      <br />
      <Trans>Hello UK 🇬🇧 Vite + React + LinguiJS!</Trans>
      <br />
      {i18n._('Hello UK 🇬🇧 Vite + React + LinguiJS!')}
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider i18n={i18n}>
      <JsLingui />
    </I18nProvider>
  );
}
