import { ComponentType } from "react";

interface AppSubRoutesProps {
  exact?: boolean;
  path?: string;
  component: ComponentType<any>;
}

export interface AppRoutesProps {
  exact?: boolean;
  path: string;
  component?: ComponentType<any>;
  subRoutes?: AppSubRoutesProps[];
}
