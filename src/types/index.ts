import { ReactElement } from "react";

export interface Keys {
    id?: number;
    name?: string;
    status?: boolean;
}

export interface RouteProps {
    path: string;
    component: ReactElement<any>;
    exact?: boolean;
}

export interface HeaderProps {
    title?: string;
    icon?: ReactElement<SVGAElement>;
    rightElement?: ReactElement<any>;
    leftElement: ReactElement<any>;
}

export interface dataSlug extends Keys {
    created_at?: Date | string;
    updated_at: Date | string;
    timeSchedule: Date | string;
}