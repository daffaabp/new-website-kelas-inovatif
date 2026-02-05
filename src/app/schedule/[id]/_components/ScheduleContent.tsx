import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface ScheduleContentProps {
    description: string | undefined | null;
}

export function ScheduleContent({ description }: ScheduleContentProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
        >
            {description || ""}
        </ReactMarkdown>
    );
}
