
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

const NewsCard = ({ id, title, excerpt, date, imageUrl, category }: NewsCardProps) => {
  return (
    <article className="group hover-elevate rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300">
      <Link to={`/news/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="pill-badge bg-pillars-yellow text-pillars-dark">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={16} className="mr-1" />
            <time dateTime={date}>{date}</time>
          </div>
          
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-pillars-green transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {excerpt}
          </p>
          
          <div className="flex justify-end">
            <span className="text-sm font-medium text-pillars-green group-hover:underline transition-all duration-300">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
