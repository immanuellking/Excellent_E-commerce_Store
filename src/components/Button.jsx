import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({title, loc}) => {
  const navigate = useNavigate();
  return (
    <div className="flex-center" onClick={() => navigate(loc)}>
        <button className="py-3 px-8 border-2 bg-brightRed border-brightRed rounded-md font-medium text-lightGrey hover:text-brightRed hover:bg-lightGrey hover:border-2 hover:border-brightRed transition-all duration-500">
            {title}
        </button>
    </div>
  )
}

export default Button