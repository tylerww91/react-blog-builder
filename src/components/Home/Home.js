import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} />
      <Editor
        title={title}
        subtitle={subtitle}
        font={font}
        align={align}
        setSubtitle={setSubtitle}
        setTitle={setTitle}
        setFont={setFont}
        setAlign={setAlign}
      />
    </main>
  );
}
