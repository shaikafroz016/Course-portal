import React from 'react';
import ContentLoader from "react-content-loader"

export const Loading = (props) => {
    return(
        <div className="col-5 col-md-4">
              <ContentLoader 
                speed={2}
                width={350}
                height={460}
                viewBox="0 0 400 460"
                backgroundColor="#ada9a9"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="0" y="60" rx="2" ry="2" width="350" height="400" />
            </ContentLoader>
        </div>
    );
};