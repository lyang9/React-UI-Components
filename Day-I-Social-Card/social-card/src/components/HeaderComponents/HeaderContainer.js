import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContent = () => {
    return (
        <div className='header-container'>
            <ImageThumbnail />
            <div className='header-text'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderContainer;