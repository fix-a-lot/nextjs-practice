import {useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

const CustomHtmlEditor = dynamic(() => import('./custom-html-editor'), {ssr: false});

export default function TestPage() {
  const [value, setValue] = useState('');

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  const quillRef = useRef();

  const [ssrEnd, setSsrEnd] = useState(false);

  function save() {
    localStorage.setItem('content', value);
  }

  function load() {
    setValue(localStorage.getItem('content') || '');
  }

  function clear() {
    setValue('');
  }

  function expose() {
    console.log('content:', localStorage.getItem('content'));
  }

  useEffect(() => {
    // load();
    setSsrEnd(true);
  }, []);

  return (
    <>
      {ssrEnd && (
        <CustomHtmlEditor
          readOnly={false}
          onSelectionChange={setRange}
          onTextChange={setLastChange}
        />
      )}
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
