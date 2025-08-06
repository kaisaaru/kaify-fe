import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from './AvatarSizes'

/**
 * AvatarGroupItem component for displaying a single avatar in a group
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.size - Size of avatar (24, 32, 40, 44, 56, 64, 72, 80)
 * @param {string} props.alt - Alt text for the image
 * @param {boolean} props.isFirst - Whether this is the first avatar in the group
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} AvatarGroupItem component
 */
const AvatarGroupItem = ({ src, size, alt, isFirst, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-${size}-px h-${size}-px rounded-circle object-fit-cover position-relative ${!isFirst ? 'ms--10px' : ''} ${className || ''}`}
        />
    );
};

AvatarGroupItem.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    alt: PropTypes.string,
    isFirst: PropTypes.bool,
    className: PropTypes.string
};

AvatarGroupItem.defaultProps = {
    alt: 'Avatar',
    isFirst: false,
    className: ''
};

/**
 * AvatarGroupCounter component for displaying the "+X" counter in an avatar group
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Size of counter (24, 32, 40, 44, 56, 64, 72, 80)
 * @param {number} props.count - Number to display
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} AvatarGroupCounter component
 */
const AvatarGroupCounter = ({ size, count, className }) => {
    return (
        <span className={`w-${size}-px h-${size}-px rounded-circle object-fit-cover position-relative ms--10px border bg-neutral-100 text-secondary-light text-xs d-inline-flex align-items-center justify-content-center ${className || ''}`}>
            +{count}
        </span>
    );
};

AvatarGroupCounter.propTypes = {
    size: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    className: PropTypes.string
};

AvatarGroupCounter.defaultProps = {
    className: ''
};

/**
 * AvatarGroupAddButton component for displaying the add button in an avatar group
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Size of button (24, 32, 40, 44, 56, 64, 72, 80)
 * @param {function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} AvatarGroupAddButton component
 */
const AvatarGroupAddButton = ({ size, onClick, className }) => {
    const textSizeClass = size === '24' ? 'text-xs' : 'text-lg';
    
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-${size}-px h-${size}-px rounded-circle border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light ${textSizeClass} d-inline-flex align-items-center justify-content-center ${className || ''}`}
        >
            <Icon icon="ic:baseline-plus" />
        </button>
    );
};

AvatarGroupAddButton.propTypes = {
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
};

AvatarGroupAddButton.defaultProps = {
    onClick: () => {},
    className: ''
};

/**
 * AvatarGroup component that displays a group of avatars with optional counter and add button
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title for the card
 * @param {Array} props.smallAvatars - Array of image sources for small avatars
 * @param {Array} props.largeAvatars - Array of image sources for large avatars
 * @param {number} props.smallHiddenCount - Number of hidden avatars for small group
 * @param {number} props.largeHiddenCount - Number of hidden avatars for large group
 * @param {boolean} props.showAddButton - Whether to show the add button
 * @param {function} props.onAddClick - Click handler for add button
 * @param {boolean} props.showCard - Whether to show the card container
 * @param {string} props.className - Additional CSS classes for the container
 * @returns {JSX.Element} AvatarGroup component
 */
const AvatarGroup = ({ 
    title, 
    smallAvatars, 
    largeAvatars, 
    smallHiddenCount, 
    largeHiddenCount, 
    showAddButton, 
    onAddClick, 
    showCard, 
    className 
}) => {
    const renderAvatarGroup = (avatars, size, hiddenCount) => (
        <div className="d-flex align-items-center flex-wrap">
            {avatars.map((src, index) => (
                <AvatarGroupItem 
                    key={`avatar-${size}-${index}`}
                    src={src}
                    size={size}
                    alt={`Avatar ${index + 1}`}
                    isFirst={index === 0}
                />
            ))}
            
            {hiddenCount > 0 && (
                <AvatarGroupCounter 
                    size={size} 
                    count={hiddenCount} 
                />
            )}
            
            {showAddButton && (
                <AvatarGroupAddButton 
                    size={size} 
                    onClick={onAddClick} 
                />
            )}
        </div>
    );
    
    const content = (
        <>
            {renderAvatarGroup(smallAvatars, '24', smallHiddenCount)}
            <div className="mt-24">
                {renderAvatarGroup(largeAvatars, '32', largeHiddenCount)}
            </div>
        </>
    );
    
    // If showCard is false, return just the content
    if (!showCard) {
        return <div className={className}>{content}</div>;
    }
    
    // Otherwise, return the content wrapped in a card
    return (
        <div className={`col-xxl-6 col-md-6 ${className || ''}`}>
            <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
                    <h6 className="text-lg mb-0">{title}</h6>
                </div>
                <div className="card-body p-24">
                    {content}
                </div>
            </div>
        </div>
    );
};

AvatarGroup.propTypes = {
    title: PropTypes.string,
    smallAvatars: PropTypes.arrayOf(PropTypes.string),
    largeAvatars: PropTypes.arrayOf(PropTypes.string),
    smallHiddenCount: PropTypes.number,
    largeHiddenCount: PropTypes.number,
    showAddButton: PropTypes.bool,
    onAddClick: PropTypes.func,
    showCard: PropTypes.bool,
    className: PropTypes.string
};

AvatarGroup.defaultProps = {
    title: 'Avatar Group',
    smallAvatars: [
        'assets/images/avatar/avatar-group1.png',
        'assets/images/avatar/avatar-group2.png',
        'assets/images/avatar/avatar-group3.png',
        'assets/images/avatar/avatar-group4.png',
        'assets/images/avatar/avatar-group5.png',
        'assets/images/avatar/avatar-group6.png',
        'assets/images/avatar/avatar-group6.png'
    ],
    largeAvatars: [
        'assets/images/avatar/avatar-group1.png',
        'assets/images/avatar/avatar-group2.png',
        'assets/images/avatar/avatar-group3.png',
        'assets/images/avatar/avatar-group4.png',
        'assets/images/avatar/avatar-group5.png',
        'assets/images/avatar/avatar-group6.png',
        'assets/images/avatar/avatar-group6.png'
    ],
    smallHiddenCount: 5,
    largeHiddenCount: 5,
    showAddButton: true,
    onAddClick: () => {},
    showCard: true,
    className: ''
};

export { AvatarGroupItem, AvatarGroupCounter, AvatarGroupAddButton };
export default AvatarGroup;