"use client";

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import React from 'react';

export default function RecaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_SITE_KEY;

  if (!recaptchaKey) {
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
