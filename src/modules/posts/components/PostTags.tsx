//= React components
// Own
import { PostTag } from "../../tags";

export default function PostTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex gap-1 flex-wrap">
            {tags.map((tagName) => {
                return (
                    <PostTag key={tagName}>
                        {`#${tagName}`}
                    </PostTag>
                );
            })}
        </div>
    );
}
