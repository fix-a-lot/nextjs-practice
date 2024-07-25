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
    console.log('in store:', content);
  }

  function clear() {
    setValue('');
  }

  function exposeStore() {
    console.log('in store:', localStorage.getItem('content'));
  }

  function exposeState() {
    console.log('value:', value);
  }

  useEffect(() => {
    // load();
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
      <button type="button" onClick={exposeStore}>
        exposeStore
      </button>
      <button type="button" onClick={exposeState}>
        exposeState
      </button>
    </>
  );
}
