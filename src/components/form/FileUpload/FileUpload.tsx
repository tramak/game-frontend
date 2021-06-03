import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  setFile: (file: File) => void;
  accept: string;
}

const FileUpload: React.FC<IProps> = ({ setFile, children, accept }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [ key, setKey ] = useState(0);
  const [ timeoutHandler, setTimeoutHandler ] = useState<ReturnType<typeof setTimeout>>();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files ? e.target?.files[0]: null;

    if (file) {
      setFile(file);
    }

    const tm = setTimeout(() => {
      setKey(key+1);
    }, 1000);

    setTimeoutHandler(tm);
  }

  useEffect(() => () => {
    timeoutHandler && clearTimeout(timeoutHandler);
  }, [ timeoutHandler ])

  return (
    <span onClick={() => ref.current?.click()}>
      <input
        key={key}
        type="file"
        name="file"
        accept={accept}
        onChange={changeHandler}
        ref={ref}
        style={{ display: 'none' }}
      />
      {children}
    </span>
  )
};

export default FileUpload;
