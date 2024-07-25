import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import {useEffect} from 'react';

Quill.register('modules/imageResize', ImageResize);

// 사이즈 변경한 이미지 불러오지 못하는 이슈 해결하는 monkey patch 코드
var BaseImageFormat = Quill.import('formats/image');
const ImageFormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];
class ImageFormat extends BaseImageFormat {
  static formats(domNode) {
    return ImageFormatAttributesList.reduce(function(formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }
  format(name, value) {
    if (ImageFormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Quill.register(ImageFormat, true);
// end of 사이즈 변경한 이미지 불러오지 못하는 이슈 해결하는 monkey patch 코드

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

  useEffect(() => {
    window.Quill = Quill;
  }, []);

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
