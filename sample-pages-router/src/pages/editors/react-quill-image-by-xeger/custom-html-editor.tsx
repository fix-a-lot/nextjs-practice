import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';

import {useEffect} from 'react';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

const modules = {
  imageActions: {},
  imageFormats: {},
  toolbar: [
    [{header: '1'}, {header: '2'}],
    // [{size: ['small', false, 'large', 'huge']}],
    [{header: [1, 2, 3, 4, 5, 6, false]}],
    // [{color: []}, {background: []}],
    // [{ 'font': [] }],
    // [{ 'align': [] }],
    [
      'bold',
      'italic',
      'underline',
      'strike'
      // 'blockquote'
    ],
    [
      {list: 'ordered'},
      {list: 'bullet'}
      // {indent: '-1'}, {indent: '+1'}
    ],
    [
      'link',
      'image'
      // 'video'
    ],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  // 'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  // 'float',
  'width'
  // 'video'
];

interface CustomHtmlEditorProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

export default function CustomHtmlEditor({
  value,
  setValue,
  placeholder = ''
}: CustomHtmlEditorProps) {

  useEffect(() => {
    window['Quill'] = Quill;
  }, []);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
}
