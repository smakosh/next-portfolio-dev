import { NextResponse } from 'next/server';

declare const INTERNALS: unique symbol;

declare module 'next/server' {
  /**
   * Workaround to enable generic type arguments for NextResponse until
   * PR is merged:
   * https://github.com/vercel/next.js/pull/47526
   * Original issue: https://github.com/vercel/next.js/issues/45943
   */
  export class NextResponse<Body = unknown> extends Response {
    [INTERNALS]: {
      cookies: ResponseCookies;
      url?: NextURL;
      Body?: Body;
    };
    static json<JsonBody>(
      body: JsonBody,
      init?: ResponseInit,
    ): NextResponse<JsonBody>;
  }
}
