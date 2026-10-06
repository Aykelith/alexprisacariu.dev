import { ProgressBarLink } from "@/components/progress_bar";

export const metadata = {
  robots: { index: false, follow: false },
  title: "Others",
};

// ponytail: hardcoded list, extract to constants/ if it grows
const SECTIONS = [["Sewing", "/others/sewing"]];

export default function OthersPage() {
  return (
    <div id="OthersPage">
      <div className="box py-12">
        <div className="flex flex-col">
          <h1 className="text-3xl font-accent mb-6">Others</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SECTIONS.map(([label, href]) => (
              <ProgressBarLink
                key={href}
                href={href}
                className="accent-button text-center py-4"
              >
                {label}
              </ProgressBarLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
