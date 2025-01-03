import React from 'react';

const Cover = ({ img, title, description }) => {
    return (
        <div className="">
            <div
                className="relative bg-cover bg-fixed bg-center bg-no-repeat  h-[450px] md:h-[450px]"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute inset-0 flex items-center">
                    <div className="bg-black bg-opacity-60 p-6 md:p-10 w-4/6 mx-auto mb-4">
                        <h1 className="text-center text-white font-bold text-xl md:text-5xl">{title}</h1>
                        <p className="text-center mt-2 text-white  text-sm md:text-base">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
