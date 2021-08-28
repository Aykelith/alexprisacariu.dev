export default function PostTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex gap-1">
            {tags.map((tagName) => {
                return (
                    <div key={tagName} className="text-xs bg-blue-500 text-white rounded px-1">
                        {`#${tagName}`}
                    </div>
                );
            })}
        </div>
    );
}
