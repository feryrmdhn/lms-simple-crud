import { ReactElement } from "react";

export interface Keys {
    id: number;
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

export interface DataSlug {
    created_at?: Date | string;
    updated_at: Date | string;
    timeSchedule: Date | string;
}

export type CustomSizeModal = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalDialogProps {
    id?: number;
    title: string;
    size: CustomSizeModal;
    desc: string;
    isCentered: boolean;
    variant?: string;
    backdropFilter?: string;
    onSubmit: () => void;
    onCancel?: () => void;
}

export interface EditableProps {
    id?: number;
    defaultValue: string;
    isPreviewFocus: boolean;
}

export type TypeLesson = 'video' | 'image' | 'onsite';

export interface Lesson {
    id: number;
    idSession: number;
    name?: string;
    icon?: ReactElement<SVGAElement>;
    duration?: string;
    typeLesson: TypeLesson
    isPreview?: boolean;
    isRequired: boolean;
    created_at?: Date | string;
}

export interface SessionData extends Keys {
    lesson?: Array<Lesson>;
    icon?: ReactElement<SVGAElement>;
}