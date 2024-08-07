import React, { useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

export interface EditorProps {
  data?: OutputData;
  onChange: (data: OutputData) => void;
}

export default function Editor({ data, onChange }: EditorProps): React.ReactElement {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: Header,
          list: List,
        },
        data: data || {},
        onChange: async () => {
          const content = await editorRef.current?.save();
          onChange(content);
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return <div id="editorjs" className="prose max-w-none" />;
}