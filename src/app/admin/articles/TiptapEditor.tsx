'use client'
import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  className?: string;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange, className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Define the editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Handle client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set content when the prop changes and the editor is ready
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  // Return the editor content
  return (
    <div className={className}>
      {isMounted && <EditorContent editor={editor} />}
    </div>
  );
};

export default TiptapEditor;