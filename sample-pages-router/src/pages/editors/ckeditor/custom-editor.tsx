import {CKEditor} from '@ckeditor/ckeditor5-react';
import {
  Bold,
  ClassicEditor,
  Essentials,
  ImageToolbar,
  Italic,
  Mention,
  Paragraph,
  Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default function CUstomEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        image: {
          toolbar: ['toggleImageCaption', 'imageTextAlternative', 'ckboxImageEdit']
        },
        toolbar: {
          items: ['undo', 'redo', '|', 'bold', 'italic']
        },
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo, ImageToolbar],
        initialData: '<p>Hello from CKEditor 5 in React!</p>'
      }}
    />
  );
}
