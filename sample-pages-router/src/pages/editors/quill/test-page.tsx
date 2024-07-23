import {useState} from 'react';
import dynamic from 'next/dynamic';

const CustomHtmlEditor = dynamic(() => import('./custom-html-editor'), {ssr: false});

export default function TestPage() {
  const [value, setValue] = useState('');
  return <CustomHtmlEditor
    value={value}
    setValue={setValue}
    placeholder={'내용을 입력해 주세요.'}
  />;
}
