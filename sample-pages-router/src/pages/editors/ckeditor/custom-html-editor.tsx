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

import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

export default function CustomHtmlEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ['undo', 'redo', '|', 'bold', 'italic']
        },
        plugins: [Bold, Essentials, Italic, Paragraph, Undo],
        licenseKey: '<YOUR_LICENSE_KEY>',
        initialData: '<p>Hello from CKEditor 5 in React!</p>'
      }}
    />
  );
}
