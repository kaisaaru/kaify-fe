import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const DropdownContext = createContext();

/**
 * The main Dropdown component wrapper. It manages the open/close state.
 * @param {object} props
 * @param {React.ReactNode} props.children - The sub-components (Toggle, Menu).
 * @param {'down' | 'up' | 'start' | 'end'} [props.direction='down'] - The direction the menu should open.
 */
const Dropdown = ({ children, direction = 'down' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const directionClasses = {
        down: 'dropdown',
        up: 'btn-group dropup',
        start: 'btn-group dropstart',
        end: 'btn-group dropend',
    };

    // Effect to close the dropdown when a click occurs outside of it.
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    return (
        <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
            <div className={directionClasses[direction]} ref={wrapperRef}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

/**
 * The button or element that toggles the dropdown menu.
 * Can be rendered as any component using the 'as' prop.
 */
const Toggle = ({ children, as: Component = 'button', className = '', ...props }) => {
    const { isOpen, setIsOpen } = useContext(DropdownContext);
    return (
        <Component
            className={`dropdown-toggle ${className}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            {...props}
        >
            {children}
        </Component>
    );
};

/**
 * The container for the dropdown menu items.
 */
const Menu = ({ children, className = '' }) => {
    const { isOpen } = useContext(DropdownContext);
    return (
        <ul className={`dropdown-menu ${isOpen ? 'show' : ''} ${className}`}>
            {children}
        </ul>
    );
};

/**
 * An individual item within the dropdown menu.
 */
const Item = ({ children, href = '#', className = '' }) => {
    return (
        <li>
            <Link
                href={href}
                className={`dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 ${className}`}
            >
                {children}
            </Link>
        </li>
    );
};

// Assign sub-components to the main Dropdown component
Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
