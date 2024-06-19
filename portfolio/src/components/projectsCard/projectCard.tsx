interface WebsiteCardProps {
  text: string;
  content: string;
  url: string;
  image: any;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ text, content, url, image }) => {

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-4 border border-2 border-bahama-50">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex justify-center items-center h-40 bg-gray-200">
            <img
            className="object-cover"
            src={image}
          />
        </div>
        <div className="px-6 py-4 bg-bahama-200">
          <div className="font-bold text-xl mb-2 text-bahama-950">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default WebsiteCard;