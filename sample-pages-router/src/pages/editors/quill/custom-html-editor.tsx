import {useEffect, useState} from 'react';

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});
const ImageResize = dynamic(() => import('quill-image-resize-module-react'), {ssr: false});
// const Quill = dynamic(() => import('react-quill').then(module => module.default.Quill), {ssr: false})

export default function CustomHtmlEditor() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const registerQuillModules = async () => {
      const {Quill} = await import('react-quill');
      const ImageResize = await import('quill-image-resize-module-react');
      Quill.register('modules/imageResize', ImageResize.default);
    };

    registerQuillModules();
  }, []);

  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      modules={{
        toolbar: [
          [{font: []}],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
          ['link', 'image'],
          ['clean']
        ]
      }}
    />
  );
}
