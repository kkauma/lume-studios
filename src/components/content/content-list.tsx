import { formatDistanceToNow } from "date-fns";

interface Content {
  id: string;
  title: string;
  type: string;
  status: string;
  created_at: string;
}

interface ContentListProps {
  contents: Content[];
}

export function ContentList({ contents }: ContentListProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Content</h2>

      {contents.length === 0 ? (
        <p className="text-gray-400">No content generated yet</p>
      ) : (
        <div className="space-y-4">
          {contents.map((content) => (
            <div
              key={content.id}
              className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-white">{content.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-400">{content.type}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-400">
                    {formatDistanceToNow(new Date(content.created_at), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    content.status === "published"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-yellow-500/10 text-yellow-500"
                  }`}
                >
                  {content.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
