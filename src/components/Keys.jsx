import React from 'react';

const Keys = ({ label, keyClass, onButtonClick }) => {
    const equalClass = 'col-[span_2] bg-gradient-to-r from-[#4ccdc6] to-[#4cb5c6] text-[#1a261a] font-semibold hover:bg-[#4ca9c6]';

    return (
        <div
            className={`bg-[#141414] flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#4ccdc742] ${keyClass ? equalClass : ''}`}
            onClick={() => onButtonClick(label)}
        >
            {label}
        </div>
    );
};

export default Keys;