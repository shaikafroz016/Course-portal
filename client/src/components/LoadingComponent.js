import React from 'react';
import ContentLoader from "react-content-loader"

export const Loading = (props) => {
    return(
        <div >
                <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#ada9a9"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-75" y="151" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
        </div>
    );
};