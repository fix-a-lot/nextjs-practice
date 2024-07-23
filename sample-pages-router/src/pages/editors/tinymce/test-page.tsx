import {Editor} from '@tinymce/tinymce-react';
import {useRef} from 'react';
import CustomHtmlEditor from '@/pages/editors/tinymce/custom-html-editor';

export default function TinyMce() {

  return (
    <div>
      <CustomHtmlEditor />
    </div>
  );
}
