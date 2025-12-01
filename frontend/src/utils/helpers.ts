export const classNames = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};
