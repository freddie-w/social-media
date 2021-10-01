interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
}

const SnapshotCard: React.FC<Props> = ({ title, href, children }) => {
  return (
    <section>
      <div className="card">
        <div className="p-6">
          <h2>{title}</h2>
          <div className="mt-6 flow-root">
            <ul role="list" className="-my-4 divide-y divide-gray-200">
              {children}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href={href}
              className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapshotCard;
