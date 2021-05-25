import React, { useRef } from 'react';

interface IProps {
  setFile: (file: File) => void;
  accept: string;
}

const FileUpload: React.FC<IProps> = ({ setFile, children, accept }) => {
  const ref = useRef<HTMLInputElement>(null);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files ? e.target?.files[0]: null;

    if (file) {
      setFile(file);
    }
    console.log({ file });
  }

  return (
    <span onClick={() => ref.current?.click()}>
      <input
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
