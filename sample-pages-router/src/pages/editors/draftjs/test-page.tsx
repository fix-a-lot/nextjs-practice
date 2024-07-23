import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
import {ContentState, EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import toolbar from './toolbar'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Editor를 동적으로 로딩하여 서버 사이드 렌더링을 피합니다.
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {ssr: false});
let htmlToDraft: (html: string) => any;
if (typeof window !== 'undefined') {
  import('html-to-draftjs').then(mod => {
    htmlToDraft = mod.default;
  });
}

export default function TestPage() {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
  };

  /**
   * HTML 값을 EditorState로 변환하는 함수
   */
  function htmlToEditorState(html: string) {
    // htmlToDraft가 로딩되었는지 확인합니다.
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  }

  /**
   * EditorState를 HTML로 변환하는 함수
   */
  function editorStateToHtml(state: EditorState): string {
    const contentState = state.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return draftToHtml(rawContentState);
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbar}
      />
      <button onClick={() => console.log(editorState)}>Log Editor State</button>
    </div>
  );
}

