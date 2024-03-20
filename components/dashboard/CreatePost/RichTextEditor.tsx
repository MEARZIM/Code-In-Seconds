import dynamic from 'next/dynamic';
import React from 'react';
import 'quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: true });

export interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    name?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, name }) => {

    const toolbarOptions = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'code-block': 'code' }]
        ]
    };

    const handleQuillChange = (content: string) => {
        onChange(content);
    };

    return (
        <div>
            <ReactQuill
                className="bg-white rounded-md shadow-md p-4 text-black max-h-[50vh] overflow-y-scroll"
                theme="snow"
                value={value || ''}
                onChange={handleQuillChange}
                modules={toolbarOptions}
            />
        </div>
    );
};

export default RichTextEditor;
