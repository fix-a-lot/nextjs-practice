import 'ckeditor5/ckeditor5.css';
import dynamic from 'next/dynamic';

const CustomHtmlEditor = dynamic(() => import('./custom-html-editor'), {ssr: false});

export default function TestPage() {
  return (
    <>
      <CustomHtmlEditor />
    </>
  );
}
