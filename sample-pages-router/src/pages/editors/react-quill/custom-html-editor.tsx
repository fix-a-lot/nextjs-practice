import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const modules = {
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
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize'],
    toolbarStyles: {
      backgroundColor: 'black',
      border: 'none',
      color: 'white'
      // other camelCase styles for size display
    }
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
  'image'
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
  return (
    <div>
      <ReactQuill
        // theme={this.state.theme}
        defaultValue={value}
        // value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        bounds={'#root'}
        placeholder={placeholder}
      />
    </div>
  );
}