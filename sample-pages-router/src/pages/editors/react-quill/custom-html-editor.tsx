import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import {useEffect} from 'react';

Quill.register('modules/imageResize', ImageResize);

const BaseImage = Quill.import('formats/image');
const ATTRIBUTES = ['alt', 'height', 'width', 'style'];
const WHITE_STYLE = ['margin', 'display', 'float'];

class Image extends BaseImage {
  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        if (name === 'style') {
          value = this.sanitize_style(value);
        }
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

  sanitize_style = (style) => {
    const style_arr = style.split(';');
    let allow_style = '';
    style_arr.forEach((v) => {
      if (WHITE_STYLE.indexOf(v.trim().split(':')[0]) !== -1) {
        allow_style += `${v};`;
      }
    });
    return allow_style;
  };
}

Quill.register(Image, true);
// Resize module end

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
    window['Quill'] = Quill;
  }, []);

  return (
    <div>
      <ReactQuill
        // theme={this.state.theme}
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        bounds={'#root'}
        placeholder={placeholder}
      />
    </div>
  );
}
