import Image from "next/image";

interface Props {
  href: string;
  imageUrl: string;
  alt: string;
}

const Avatar: React.FC<Props> = ({ href, imageUrl, alt }) => {
  return (
    <a href={href} className="flex-shrink-0 relative h-8 w-8">
      <Image
        className="rounded-full"
        src={imageUrl}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
    </a>
  );
};

export default Avatar;
