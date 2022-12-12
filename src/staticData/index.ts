import { Lesson, SessionData } from "../types";

export const defaultDataSession: Array<SessionData> = [
    {
        id: 1,
        name: 'Session 1',
        lesson: [
            {
                id: 1,
                idSession: 1,
                icon: undefined,
                name: 'Judul 1-1',
                isPreview: true,
                isRequired: true,
                typeLesson: 'video',
                created_at: '24 Oktober 2021, 16:30',
                duration: '06.30 min'
            },
            {
                id: 2,
                idSession: 1,
                icon: undefined,
                name: 'Judul 1-2',
                isPreview: true,
                isRequired: true,
                typeLesson: 'video',
                created_at: '24 Oktober 2021, 16:30',
                duration: '06.30 min'
            }
        ]
    },
    {
        id: 2,
        name: 'Session 2',
        lesson: [
            {
                id: 1,
                idSession: 2,
                icon: undefined,
                name: 'Judul 2-1',
                isPreview: true,
                isRequired: true,
                typeLesson: 'video',
                created_at: '24 Oktober 2021, 16:30',
                duration: '06.30 min'
            },
            {
                id: 2,
                idSession: 2,
                icon: undefined,
                name: 'Judul 2-2',
                isPreview: true,
                isRequired: true,
                typeLesson: 'image',
                created_at: '24 Oktober 2021, 16:30',
                duration: '06.30 min'
            }
        ]
    },
]

export const defaultDataLesson: Array<Lesson> = [
    {
        id: 1,
        idSession: 1,
        icon: undefined,
        name: 'Judul 1',
        isPreview: true,
        isRequired: true,
        typeLesson: 'video',
        created_at: '24 Oktober 2021, 16:30',
        duration: '06.30 min'
    },
    {
        id: 2,
        idSession: 2,
        icon: undefined,
        name: 'Judul 2',
        isPreview: true,
        isRequired: true,
        typeLesson: 'image',
        created_at: '24 Oktober 2021, 16:30',
        duration: '06.30 min'
    }
]