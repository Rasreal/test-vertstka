import { WorkCardProps } from '@/components/WorkCard/WorkCard';


export interface WorkCardCategoryData {
    [category: string]: WorkCardProps[];
}

export const workCardData: WorkCardCategoryData = {
    Главная: [
        {
            id: 1,
            title: 'E-commerce платформа',
            tag: 'Веб-платформа',
            description:
                'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
        },
        { id: 2, title: 'Проект 2' },
        { id: 3, title: 'Проект 3' },
        { id: 4, title: 'Проект 4' },
        { id: 5, title: 'Проект 5' },
        { id: 6, title: 'Проект 6' },
    ],
    'О нас': [
        {
            id: 1,
            title: 'О нас проект',
            tag: 'История',
            description: 'Наша история и миссия.',
        },
        {
            id: 2,
            title: 'О нас проект 2',
            tag: 'История 2',
            description: 'Наша история и миссия. 2',
        },
        { id: 3, title: 'Проект 3' },
    ],
    'Услуги': [
        {
            id: 1,
            title: 'услуга',
            tag: 'Оптимизация',
            description: 'Наша история и миссия.',
        },
        { id: 2, title: 'Service 2' },
    ],
    'Портфолио': [
        {
            id: 1,
            title: 'Портфолио',
            tag: 'Портфолио',
            description: 'Наша Портфолио и Портфолио.',
        },
        { id: 2, title: 'Портфолио 2' },
    ],
};
