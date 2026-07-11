import type { FeatureItem } from "@/lib/content/types";
import { ChevronRightIcon, FeatureIconGraphic } from "../ui/Icons";

type FeatureCardProps = {
  item: FeatureItem;
};

export function FeatureCard({ item }: FeatureCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-lg border-2 border-white-smoke bg-white px-4 py-5 md:px-5">
      <FeatureIconGraphic icon={item.icon} className="h-10 w-10 shrink-0" />
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-sm font-bold text-prussian-blue md:text-base">
          {item.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-prussian-blue/90 md:text-sm">
          {item.description}
        </p>
      </div>
      <ChevronRightIcon className="h-5 w-5 shrink-0 text-prussian-blue/40 md:h-6 md:w-6" />
    </article>
  );
}
