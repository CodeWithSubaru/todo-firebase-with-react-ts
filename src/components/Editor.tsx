import MDEditor from "@uiw/react-md-editor";
import clsx from "clsx";

export default function Editor({
  markdown,
  onChange,
  className,
}: {
  markdown: string;
  className?: string;
  onChange: (value?: string) => void;
}) {
  return (
    <div className="h-[500px] overflow-y-auto">
      <MDEditor
        value={markdown}
        onChange={onChange}
        className={clsx(
          "editor bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
      />
      {/* <MDEditor.Markdown source={markdown} style={{ whiteSpace: "pre-wrap" }} /> */}
    </div>
  );
}
