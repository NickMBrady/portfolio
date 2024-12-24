import React from 'react';

const SafeAreaWrapper = ({ children }) => {
    const safeAreaStyles = {
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
    };

    return (
        <div style={safeAreaStyles}>
            {children}
        </div>
    );
};

export default SafeAreaWrapper;