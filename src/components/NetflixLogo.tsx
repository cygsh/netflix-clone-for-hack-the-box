import React from 'react';

interface NetflixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const NetflixLogo: React.FC<NetflixLogoProps> = ({ className = 'h-8 md:h-9 w-auto', size }) => {
  const sizeClasses = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10 md:h-12' : 'h-8 md:h-9';
  return (
    <svg
      className={`${sizeClasses} ${className}`}
      viewBox="0 0 111 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="#E50914"
      aria-label="Netflix"
      role="img"
    >
      <path d="M105.062 14.28L111 30c-1.792-.26-3.666-.484-5.54-.672l-4.062-11.83h-4.328V30H92V0h6.14c4.64 0 7.804 2.656 7.804 7.156 0 3.032-1.484 5.39-3.882 6.453v.063c1.187.25 2.218.422 3 .609zm-8.007-3.03h3.53c1.704 0 2.8-.829 2.8-2.22 0-1.422-1.094-2.188-2.8-2.188h-3.53v4.407zM80.016 0v5.516h-7.852v6.687h7.242v5.375h-7.242V30H66.9V0h13.116zm-17.75 0v5.516h-5.742V30H51.25V5.516h-5.742V0h16.758zm-20.032 0v30h-5.273V0h5.273zm-11.453 0v30H25.5V5.516h-6.61V0H30.78zm-23.375 0v18.687L1.875 0H0v30h5.273V11.312L10.805 30h1.875V0H7.406z" />
    </svg>
  );
};

export const NetflixNIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-7' }) => {
  return (
    <svg className={`${className} fill-[#E50914]`} viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h5.33v24.67L18.67 0H24v40h-5.33V15.33L5.33 40H0V0z" />
    </svg>
  );
};
