import React, {forwardRef, useEffect, useLayoutEffect, useRef} from 'react';
import Quill from 'quill';

import "quill/dist/quill.core.css";

// Editor is an uncontrolled React component
// const CustomHtmlEditor = forwardRef(
//   ({ readOnly, defaultValue, onTextChange, onSelectionChange }: any, ref: any) => {

export default function CustomHtmlEditor({readOnly, defaultValue, onTextChange, onSelectionChange}: any) {
  const containerRef = useRef(null);
  const defaultValueRef = useRef(defaultValue);
  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);

  const ref = useRef(null);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
    onSelectionChangeRef.current = onSelectionChange;
  });

  useEffect(() => {
    ref.current?.enable(!readOnly);
  }, [ref, readOnly]);

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement('div')
    );
    const quill = new Quill(editorContainer, {
      theme: 'snow'
    });

    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    quill.on(Quill.events.TEXT_CHANGE, (...args) => {
      onTextChangeRef.current?.(...args);
    });

    quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      onSelectionChangeRef.current?.(...args);
    });

    return () => {
      ref.current = null;
      container.innerHTML = '';
    };
  }, [ref]);

  return <div ref={containerRef}></div>;
}

// CustomHtmlEditor.displayName = 'CustomHtmlEditor';
//
// export default CustomHtmlEditor;
