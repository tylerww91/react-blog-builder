import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} />
      <Editor
        title={title}
        subtitle={subtitle}
        font={font}
        setSubtitle={setSubtitle}
        setTitle={setTitle}
        setFont={setFont}
      />
    </main>
  );
}
