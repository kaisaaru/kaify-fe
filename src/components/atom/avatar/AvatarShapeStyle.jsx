import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from './AvatarSizes'

/**
 * AvatarShapeStyle component that displays avatars with different shape styles
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title for the card
 * @param {string} props.squareImageSrc - Image source for square avatar
 * @param {string} props.circleImageSrc - Image source for circular avatar
 * @param {string} props.customImageSrc - Image source for custom shape avatar
 * @param {boolean} props.showCard - Whether to show the card container
 * @param {string} props.className - Additional CSS classes for the container
 * @returns {JSX.Element} AvatarShapeStyle component
 */
const AvatarShapeStyle = ({ 
    title, 
    squareImageSrc, 
    circleImageSrc, 
    customImageSrc, 
    showCard, 
    className 
}) => {
    const content = (
        <div className="d-flex align-items-center flex-wrap justify-content-between gap-3">
            <img
                src={squareImageSrc}
                alt="Square Avatar"
                className="w-120-px h-120-px radius-8 object-fit-cover"
            />
            <img
                src={circleImageSrc}
                alt="Circle Avatar"
                className="w-120-px h-120-px rounded-circle object-fit-cover"
            />
            <img
                src={customImageSrc}
                alt="Custom Avatar"
                className="w-auto h-120-px object-fit-cover"
            />
        </div>
    );
    
    // If showCard is false, return just the content
    if (!showCard) {
        return <div className={className}>{content}</div>;
    }
    
    // Otherwise, return the content wrapped in a card
    return (
        <div className={`col-xxl-6 col-md-6 ${className || ''}`}>
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

AvatarShapeStyle.propTypes = {
    title: PropTypes.string,
    squareImageSrc: PropTypes.string,
    circleImageSrc: PropTypes.string,
    customImageSrc: PropTypes.string,
    showCard: PropTypes.bool,
    className: PropTypes.string
};

AvatarShapeStyle.defaultProps = {
    title: 'Avatar Shape Style',
    squareImageSrc: 'assets/images/avatar/avatar-shape1.png',
    circleImageSrc: 'assets/images/avatar/avatar-shape2.png',
    customImageSrc: 'assets/images/avatar/avatar-shape3.png',
    showCard: true,
    className: ''
};

export default AvatarShapeStyle