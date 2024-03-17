import Markdown from "markdown-to-jsx";

export default function MyMarkdown({content}) {
    const options = {
        overrides: {
            h1: {
                props: {
                    className: 'text-lg font-bold',
                },
            },
            ol: {
                props: {
                    className: 'list-decimal pl-8',
                },
            },
        },
    }

    return <Markdown children={content} options={options}/>
}