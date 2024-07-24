import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

const CustomHtmlEditor = dynamic(() => import('./custom-html-editor'), {ssr: false});

export default function TestPage() {
  const [value, setValue] = useState('');

  function save() {
    localStorage.setItem('content', value);
  }

  function load() {
    let content = localStorage.getItem('content') || '';
    setValue(content);
    console.log('content:', content);
  }

  function clear() {
    setValue('');
  }

  function expose() {
    console.log('content:', localStorage.getItem('content'));
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <CustomHtmlEditor value={value} setValue={setValue} placeholder={'내용을 입력해 주세요.'} />
      <button type="button" onClick={save}>
        save
      </button>
      <button type="button" onClick={load}>
        load
      </button>
      <button type="button" onClick={clear}>
        clear
      </button>
      <button type="button" onClick={expose}>
        expose
      </button>
    </>
  );
}
