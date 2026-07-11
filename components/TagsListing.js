// Components
import { ProgressBarLink } from "@/components/progress_bar";

export default function TagsListing({ tags, hrefPrefix, title, description }) {
  return (
    <div id="TagsPage" className="page">
      <div className="box">
        <h1 className="text-4xl font-bold mt-12">{title}</h1>
        <div className="text-muted-foreground mb-12">{description}</div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <ProgressBarLink
              key={tag.slug}
              href={`${hrefPrefix}/tag-${tag.slug}/1`}
              className="bg-tag px-3 py-1 rounded hover:bg-card-hover"
            >
              {tag.name}{" "}
              <span className="text-muted-foreground">({tag.count})</span>
            </ProgressBarLink>
          ))}
        </div>
      </div>
    </div>
  );
}
