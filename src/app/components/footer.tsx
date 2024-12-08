import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center mb-6 px-16">
      {/* Footer Image */}
      <Image
        src="/footer.png"
        alt="Footer Logo"
        width={1240.01}
        height={419}
        className="object-contain"
      />
    </div>
  );
};

export default Footer;
