import React from 'react';

interface Props {
    image: string;
    title: string;
    text: string;
}

const CardItem: React.FC<Props> = ({ image, title, text }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-end">
            <div className="card h-100 shadow-lg">
                <img className="card-img-top" src={image} alt={`${title} - image`} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mt-auto">{title}</h5>
                    <p className="card-text mt-auto">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
