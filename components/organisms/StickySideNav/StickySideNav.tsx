import { classNames } from "@/lib/classNames";
import { IPrimaryNavigation, ISecondaryNavigation } from "@/types/INavigation";

interface Props {
  primaryNavigation: IPrimaryNavigation[];
  secondaryNavigation?: ISecondaryNavigation;
}

const StickySideNav: React.FC<Props> = ({
  primaryNavigation,
  secondaryNavigation,
}) => {
  return (
    <nav
      aria-label="Sidebar"
      className={classNames(
        secondaryNavigation ? "divide-y divide-gray-300" : "",
        "sticky top-4"
      )}
    >
      <div className="pb-8 space-y-1">
        {primaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-50",
              "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </div>
      {secondaryNavigation && (
        <div className="pt-10">
          <p
            className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
            id="communities-headline"
          >
            {secondaryNavigation.title}
          </p>
          <div
            className="mt-3 space-y-2"
            aria-labelledby="communities-headline"
          >
            {secondaryNavigation.items.map(
              (item: { name: string; href: string }) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">{item.name}</span>
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickySideNav;
