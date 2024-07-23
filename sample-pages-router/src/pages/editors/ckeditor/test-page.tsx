import 'ckeditor5/ckeditor5.css';
import dynamic from 'next/dynamic';

const CustomEditor = dynamic(() => import('./custom-editor'), {ssr: false});

export default function TestPage() {
  return (
    <>
      <CustomEditor />
    </>
  );
}
