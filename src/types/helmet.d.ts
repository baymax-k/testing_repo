// Override helmet types — the package's exports field lacks a `types` condition,
// which breaks moduleResolution: "nodenext" on Vercel with TypeScript 5.9.
declare module "helmet" {
  import type { IncomingMessage, ServerResponse } from "node:http";

  interface ContentSecurityPolicyOptions {
    useDefaults?: boolean;
    directives?: Record<string, Iterable<string> | null>;
    reportOnly?: boolean;
  }

  interface HelmetOptions {
    contentSecurityPolicy?: ContentSecurityPolicyOptions | boolean;
    crossOriginEmbedderPolicy?: { policy?: string } | boolean;
    crossOriginOpenerPolicy?: { policy?: string } | boolean;
    crossOriginResourcePolicy?: { policy?: string } | boolean;
    originAgentCluster?: boolean;
    referrerPolicy?: { policy?: string | string[] } | boolean;
    strictTransportSecurity?: {
      maxAge?: number;
      includeSubDomains?: boolean;
      preload?: boolean;
    } | boolean;
    xContentTypeOptions?: boolean;
    xDnsPrefetchControl?: { allow?: boolean } | boolean;
    xDownloadOptions?: boolean;
    xFrameOptions?: { action?: string } | boolean;
    xPermittedCrossDomainPolicies?: { permittedPolicies?: string } | boolean;
    xPoweredBy?: boolean;
    xXssProtection?: boolean;
  }

  function helmet(
    options?: Readonly<HelmetOptions>,
  ): (
    req: IncomingMessage,
    res: ServerResponse,
    next: (err?: unknown) => void,
  ) => void;

  export default helmet;
}
