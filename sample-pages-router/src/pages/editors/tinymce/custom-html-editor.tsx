import {Editor} from '@tinymce/tinymce-react';
import {useEffect, useRef, useState} from 'react';

export default function TestPage() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [serverSideRenderingComplete, setServerSideRenderingComplete] = useState(false);
  useEffect(() => {
    setServerSideRenderingComplete(true);
  }, []);

  return (
    <>
      {serverSideRenderingComplete && (
        <>
          <Editor
            ref={editorRef}
            key="5is7i3odxveiot34veurl47prwat1sa9y435qivjuaz7nhn5"
            apiKey="5is7i3odxveiot34veurl47prwat1sa9y435qivjuaz7nhn5"
            init={{
              plugins:
                'autolink codesample emoticons image link lists media searchreplace table visualblocks' +
                'wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen powerpaste' +
                'advtable advcode editimage mentions tableofcontents' +
                'inlinecss markdown',
              toolbar:
                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table' +
                '| align lineheight | checklist numlist bullist indent outdent | removeformat'
            }}
            initialValue="Welcome to TinyMCE!"
          />
          <button onClick={log}>Log editor content</button>
        </>
      )}
    </>
  );
}
