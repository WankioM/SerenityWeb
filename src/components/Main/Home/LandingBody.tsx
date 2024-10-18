import React from 'react';
import backgroundImage from '../../../assets/bnw.jpg';

const LandingBody: React.FC = () => {
  return (
    <div>
     
     

     <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${backgroundImage})` }}
                  >
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
                    >
                      Your personal AI therapist. Your personal AI therapist for anxiety, depression, addiction, and more.
                    </h1>
                    <div className="flex-wrap gap-3 flex">
                      
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
          
    </div>
  );
};

export default LandingBody;