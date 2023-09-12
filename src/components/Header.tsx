import { DarkMode } from "./DarkMode";
import { PageContainer } from "./PageContainer";

const Left = ({ title }: { title?: string }) => (
  <div className="flex justify-start space-x-2 md:space-x-4 items-center">
    {title && (
      <h1 className="text-dark dark:text-light font-bold uppercase text-xl">
        {title}
      </h1>
    )}
  </div>
);

const Right = ({ darkMode }: { darkMode?: boolean }) => {
  return (
    darkMode && (
      <div className="flex space-x-4  items-center">
        <DarkMode />
      </div>
    )
  );
};

export function Header({
  title,
  darkMode = false,
}: {
  title?: string;
  darkMode?: boolean;
}) {
  return (
    <div className="py-2 sm:py-4">
      <PageContainer>
        <div className="flex items-center justify-between">
          <Left title={title} />
          <Right darkMode={darkMode} />
        </div>
      </PageContainer>
    </div>
  );
}
