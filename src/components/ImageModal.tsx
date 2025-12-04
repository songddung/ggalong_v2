import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        aria-label="닫기"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="relative max-w-4xl w-full p-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ClickableImage: React.FC<ClickableImageProps> = ({ src, alt, className }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setIsModalOpen(true)}
      />
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={src}
        imageAlt={alt}
      />
    </>
  );
};
