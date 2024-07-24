// Import React dependencies.
import React, {useState} from 'react';
// Import the Slate editor factory.
import {createEditor} from 'slate';

// TypeScript users only add this code
import {BaseEditor, Descendant} from 'slate';
import {ReactEditor} from 'slate-react';

type CustomElement = {type: 'paragraph'; children: CustomText[]};
type CustomText = {text: string};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'A line of text in a paragraph.'
      }
    ]
  }
];

import {Slate, Editable, withReact} from 'slate-react';

export default function Editor() {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    // @ts-ignore
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  );
}
