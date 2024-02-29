import { SerializedStyles } from "@emotion/react";

export interface CssType extends Record<string, string | SerializedStyles> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ParamsType extends Record<string | number, any> {}
