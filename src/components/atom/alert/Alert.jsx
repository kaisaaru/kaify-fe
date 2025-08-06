import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

/**
 * A flexible, reusable Alert component.
 *
 * @param {object} props - The component's props.
 * @param {'subtle' | 'solid' | 'outline' | 'left-border'} [props.variant='subtle'] - The style variant of the alert.
 * @param {'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'} [props.color='primary'] - The color scheme of the alert.
 * @param {string} props.title - The main message text of the alert.
 * @param {string} [props.description] - Optional descriptive text below the title.
 * @param {string} [props.icon] - Optional icon name from Iconify.
 * @param {boolean} [props.dismissible=true] - Whether to show the close button.
 * @param {string} [props.className] - Additional classes for customization.
 * @returns {React.ReactElement} The rendered alert component.
 */
const Alert = ({
                   variant = 'subtle',
                   color = 'primary',
                   title,
                   description,
                   icon,
                   dismissible = true,
                   className = '',
               }) => {
    const colorConfig = {
        primary: {
            subtle: 'bg-primary-50 text-primary-600 border-primary-50',
            solid: 'bg-primary-600 text-white border-primary-600',
            outline: 'bg-transparent text-primary-600 border-primary-600',
            'left-border': 'bg-primary-50 text-primary-600 border-primary-600',
            text: 'text-primary-600',
            solidText: 'text-white',
        },
        secondary: {
            subtle: 'bg-lilac-50 text-lilac-600 border-lilac-50',
            solid: 'bg-lilac-600 text-white border-lilac-600',
            outline: 'bg-transparent text-lilac-600 border-lilac-600',
            'left-border': 'bg-lilac-50 text-lilac-600 border-lilac-600',
            text: 'text-lilac-600',
            solidText: 'text-white',
        },
        success: {
            subtle: 'bg-success-100 text-success-600 border-success-100',
            solid: 'bg-success-600 text-white border-success-600',
            outline: 'bg-transparent text-success-600 border-success-600',
            'left-border': 'bg-success-100 text-success-600 border-success-600',
            text: 'text-success-600',
            solidText: 'text-white',
        },
        warning: {
            subtle: 'bg-warning-100 text-warning-600 border-warning-100',
            solid: 'bg-warning-600 text-white border-warning-600',
            outline: 'bg-transparent text-warning-600 border-warning-600',
            'left-border': 'bg-warning-100 text-warning-600 border-warning-600',
            text: 'text-warning-600',
            solidText: 'text-white',
        },
        info: {
            subtle: 'bg-info-100 text-info-600 border-info-100',
            solid: 'bg-info-600 text-white border-info-600',
            outline: 'bg-transparent text-info-600 border-info-600',
            'left-border': 'bg-info-100 text-info-600 border-info-600',
            text: 'text-info-600',
            solidText: 'text-white',
        },
        danger: {
            subtle: 'bg-danger-100 text-danger-600 border-danger-100',
            solid: 'bg-danger-600 text-white border-danger-600',
            outline: 'bg-transparent text-danger-600 border-danger-600',
            'left-border': 'bg-danger-100 text-danger-600 border-danger-600',
            text: 'text-danger-600',
            solidText: 'text-white',
        },
    };

    const styles = colorConfig[color] || colorConfig.primary;

    const alertVariantClasses =
        variant === 'left-border'
            ? 'radius-4 px-24 py-13 border-start-width-4-px border-top-0 border-end-0 border-bottom-0'
            : 'radius-8 px-24 py-11';

    const alertClasses = [
        'alert',
        `alert-${color === 'secondary' ? 'lilac' : color}`,
        'mb-0',
        'fw-semibold',
        'text-lg',
        alertVariantClasses,
        styles[variant],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const buttonClasses = `remove-button text-xxl line-height-1 ${
        variant === 'solid' ? styles.solidText : styles.text
    }`;

    const descriptionClasses = `fw-medium text-sm mt-8`;

    const alignmentClass = description || icon ? 'align-items-start' : 'align-items-center';

    const iconClasses = `icon text-xl flex-shrink-0 ${description ? 'mt-4' : ''}`;

    return (
        <div className={alertClasses} role="alert">
            <div className={`d-flex ${alignmentClass} justify-content-between w-100 gap-4`}>
                <div className={`d-flex ${alignmentClass} gap-2 flex-grow-1`}>
                    {icon && <Icon icon={icon} className={iconClasses} />}
                    <div className="flex-grow-1">
                        {title}
                        {description && <p className={descriptionClasses}>{description}</p>}
                    </div>
                </div>
                {dismissible && (
                    <button className={buttonClasses}>
                        <Icon icon="iconamoon:sign-times-light" className="icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Alert;