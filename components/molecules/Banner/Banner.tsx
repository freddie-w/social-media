interface Props {
  title: string;
}

const Banner: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-full py-8 text-center px-4 bg-white shadow rounded-lg mb-5">
      <h1 className="text-gray-900">{title}</h1>
    </div>
  );
};

export default Banner;
