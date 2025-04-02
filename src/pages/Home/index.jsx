import { useState } from "react";

function Home() {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <h1>Home page</h1>
      <img src={preview} alt="" width={200} />
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={(e) => {
          const image = e.target.files[0];
          URL.revokeObjectURL(preview);
          setPreview(URL.createObjectURL(image));
        }}
      />
    </>
  );
}

export default Home;
