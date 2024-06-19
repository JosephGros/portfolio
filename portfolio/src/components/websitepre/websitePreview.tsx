import { useEffect, useState } from 'react';
import fallbackImage from '../../assets/errorAlien.png';

interface WebsitePreviewCardProps {
  text: string;
  url: string;
}

const WebsitePreviewCard: React.FC<WebsitePreviewCardProps> = ({ text, url }) => {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const image = fallbackImage;


    useEffect(() => {
        const fetchScreenshot = async () => {
          try {
            const response = await fetch(`https://web-page-reader.onrender.com/screenshot?url=${url}`);
            if (response.ok) {
              const blob = await response.blob();
              setScreenshot(URL.createObjectURL(blob));
            } else {
              setScreenshot(image);
            }
          } catch (error) {
            console.error('Error fetching screenshot:', error);
            setScreenshot(image);
          }
        };
    
        fetchScreenshot();
      }, [url]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex justify-center items-center h-40 bg-gray-200">
          {screenshot ? (
            <img
            className="object-cover"
            src={screenshot}
            alt={`${text} preview`}
            onError={(e) => (e.currentTarget.src = image)}
          />
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default WebsitePreviewCard;