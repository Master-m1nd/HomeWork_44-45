import React from 'react';

const Card = ({ img, title, description, author, date }) => {
    const formattedDate = date ? new Date(date).toLocaleDateString() : null;

    return (
        <div className='card'>
            <img className='cardImg' src={img} alt="card" />
            <span className='date'>{formattedDate}</span>
            <h2 className='title'>{title}</h2>
            <span className='description'>{description}</span>
            <div className='authorCard'>
                {author && author.name && author.position && author.avatar && 
                    <>
                        <img className='authorAvatar' src={author.avatar} alt="avatar" />  
                        <div className='authorInfo'>
                            <span className='authorName'>{author.name}</span>
                            <span className='authorPosition'>{author.position}</span> 
                        </div>
                    </>
                }  
            </div>
        </div>
    );
};

export default Card;