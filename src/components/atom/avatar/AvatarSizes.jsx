import React from 'react'
import PropTypes from 'prop-types'

/**
 * Avatar component with customizable size, shape, and image source
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.size - Size of avatar (24, 32, 40, 44, 56, 64, 72, 80)
 * @param {string} props.shape - Shape of avatar ('circle' or 'square')
 * @param {string} props.alt - Alt text for the image
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Avatar component
 */
const Avatar = ({ src, size, shape, alt, className }) => {
    // Determine size class
    const sizeClass = `w-${size}-px h-${size}-px`;
    
    // Determine shape class
    const shapeClass = shape === 'circle' ? 'rounded-circle' : 'radius-8';
    
    return (
        <img
            src={src}
            className={`${sizeClass} ${shapeClass} object-fit-cover ${className || ''}`}
            alt={alt}
        />
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['24', '32', '40', '44', '56', '64', '72', '80']).isRequired,
    shape: PropTypes.oneOf(['circle', 'square']).isRequired,
    alt: PropTypes.string,
    className: PropTypes.string
};

Avatar.defaultProps = {
    alt: 'Avatar',
    className: ''
};

/**
 * AvatarSizes component that displays various avatar sizes and shapes
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title for the card
 * @param {string} props.circleImageSrc - Image source for circular avatars
 * @param {string} props.squareImageSrc - Image source for square avatars
 * @param {boolean} props.showCard - Whether to show the card container
 * @param {string} props.className - Additional CSS classes for the container
 * @returns {JSX.Element} AvatarSizes component
 */
const AvatarSizes = ({ 
    title, 
    circleImageSrc, 
    squareImageSrc, 
    showCard, 
    className 
}) => {
    // Available sizes
    const sizes = ['24', '32', '40', '44', '56', '64', '72', '80'];
    
    const content = (
        <>
            <div className="d-flex align-items-center flex-wrap gap-3">
                {sizes.map(size => (
                    <Avatar 
                        key={`circle-${size}`}
                        src={circleImageSrc}
                        size={size}
                        shape="circle"
                        alt="Avatar"
                    />
                ))}
            </div>
            <div className="d-flex align-items-center flex-wrap gap-3 mt-24">
                {sizes.map(size => (
                    <Avatar 
                        key={`square-${size}`}
                        src={squareImageSrc}
                        size={size}
                        shape="square"
                        alt="Avatar"
                    />
                ))}
            </div>
        </>
    );
    
    // If showCard is false, return just the content
    if (!showCard) {
        return <div className={className}>{content}</div>;
    }
    
    // Otherwise, return the content wrapped in a card
    return (
        <div className={`col-xxl-6 ${className || ''}`}>
            <div className="card p-0 overflow-hidden position-relative radius-12">
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

AvatarSizes.propTypes = {
    title: PropTypes.string,
    circleImageSrc: PropTypes.string,
    squareImageSrc: PropTypes.string,
    showCard: PropTypes.bool,
    className: PropTypes.string
};

AvatarSizes.defaultProps = {
    title: 'Avatar Sizes',
    circleImageSrc: 'assets/images/avatar/avatar1.png',
    squareImageSrc: 'assets/images/avatar/avatar2.png',
    showCard: true,
    className: ''
};

export { Avatar };
export default AvatarSizes;