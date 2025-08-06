import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

/**
 * A versatile, reusable Button component.
 *
 * @param {object} props - The component's props.
 * @param {'solid' | 'outline' | 'soft' | 'text' | 'link'} [props.variant='solid'] - The style variant of the button.
 * @param {'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'light' | 'link'} [props.color='primary'] - The color scheme.
 * @param {'lg' | 'md' | 'sm'} [props.size='lg'] - The size of the button.
 * @param {'default' | 'pill' | 'square'} [props.shape='default'] - The border radius shape.
 * @param {string} [props.leftIcon] - Iconify string for an icon on the left.
 * @param {string} [props.rightIcon] - Iconify string for an icon on the right.
 * @param {React.ReactNode} [props.children] - The content of the button.
 * @param {string} [props.className] - Additional classes for customization.
 * @returns {React.ReactElement} The rendered button component.
 */
export const Button = ({
                           variant = 'solid',
                           color = 'primary',
                           size = 'lg',
                           shape = 'default',
                           leftIcon,
                           rightIcon,
                           children,
                           className = '',
                           ...rest
                       }) => {
    const isIconOnly = (leftIcon || rightIcon) && !children;

    // --- Class Configuration ---
    const config = {
        base: 'btn',
        variants: {
            solid: (c) => `btn-${c}`,
            outline: (c) => `btn-outline-${c}`,
            soft: (c) => `btn-${c}-100 text-${c}-600`,
            text: (c) => `text-${c}-600`,
            link: () => 'btn-link text-secondary-light text-decoration-none',
        },
        colors: {
            primary: 'primary',
            secondary: 'lilac',
            success: 'success',
            info: 'info',
            warning: 'warning',
            danger: 'danger',
            dark: 'neutral',
            light: 'light',
        },
        sizes: {
            lg: 'px-20 py-11',
            md: 'px-16 py-9',
            sm: 'px-14 py-6 text-sm',
        },
        shapes: {
            default: 'radius-8',
            pill: 'rounded-pill',
            square: '',
        },
        icon: {
            withLabel: 'd-flex align-items-center gap-2',
            iconOnly: 'w-60-px h-50-px d-flex align-items-center justify-content-center p-20',
            iconClass: 'text-xl',
        },
        specialCases: {
            solid: {
                dark: 'btn-neutral-900 text-base',
                light: 'btn-light-100 text-dark',
            },
            soft: {
                dark: 'btn-neutral-100 text-primary-light',
                light: 'btn-light-50 text-dark',
            },
            outline: {
                dark: 'btn-outline-neutral-900',
                light: 'btn-outline-light-100 text-dark',
                link: 'btn-outline-link text-secondary-light text-decoration-none',
            },
            text: {
                dark: 'text-primary-light',
                link: 'text-secondary-light text-decoration-none',
                light: 'text-secondary-light',
            },
        }
    };

    const colorName = config.colors[color] || 'primary';
    const specialCase = config.specialCases[variant]?.[color];

    let colorClass;
    if (specialCase) {
        colorClass = specialCase;
    } else if (variant === 'link') {
        colorClass = config.variants.link();
    } else {
        colorClass = config.variants[variant](`${colorName}`);
    }

    const finalClassName = [
        config.base,
        colorClass,
        config.shapes[shape],
        isIconOnly ? config.icon.iconOnly : config.sizes[size],
        !isIconOnly && (leftIcon || rightIcon) ? config.icon.withLabel : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button type="button" className={finalClassName} {...rest}>
            {leftIcon && <Icon icon={leftIcon} className={config.icon.iconClass} />}
            {children}
            {rightIcon && <Icon icon={rightIcon} className={config.icon.iconClass} />}
        </button>
    );
};

/**
 * A simple wrapper for creating button groups.
 */
export const ButtonGroup = ({ children, className = '', ...rest }) => {
    return (
        <div className={`btn-group ${className}`} role="group" aria-label="Button group" {...rest}>
            {children}
        </div>
    );
}