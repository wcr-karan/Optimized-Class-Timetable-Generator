import { ReactNode } from 'react';
import { classNames } from '../../utils/helpers';

interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    actions?: ReactNode;
}

const Card = ({ children, className, title, actions }: CardProps) => {
    return (
        <div className={classNames('bg-white rounded-lg shadow-md', className)}>
            {(title || actions) && (
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
                    {actions && <div className="flex gap-2">{actions}</div>}
                </div>
            )}
            <div className="p-6">{children}</div>
        </div>
    );
};

export default Card;
