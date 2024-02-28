import { SerializedStyles } from "@emotion/react";

export interface CssType extends Record<string, string | SerializedStyles> {}

export interface ParamsType extends Record<string | number, any> {}
