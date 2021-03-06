import { classNames } from "@/lib/classNames";
import ITab from "@/types/ITab";

interface Props {
  tabs: ITab[];
  handleTabChange: (index: number) => void;
}

const TabControl: React.FC<Props> = ({ tabs, handleTabChange }) => {
  return (
    <div className="px-4 sm:px-0">
      <div className="sm:hidden">
        <label htmlFor="post-tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="post-tabs"
          className="block w-full"
          defaultValue={tabs.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          {tabs.map((tab, index) => (
            <button
              onClick={() => handleTabChange(index)}
              key={tab.name}
              aria-current={tab.current ? "page" : undefined}
              className={classNames(
                tab.current
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700",
                index === 0 ? "rounded-l-lg" : "",
                index === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? "bg-rose-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabControl;
