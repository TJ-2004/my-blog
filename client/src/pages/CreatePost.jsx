import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function CreatePost() {
  return (
    <div className="min-h-screen p-3 max-w-3xl  mx-auto">
      <h1 className="text-center text-3xl my-7 font-semibold">Create Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <TextInput
            className="flex-1"
            type="text"
            placeholder="Title"
            required
            id="title"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">ReactJs</option>
            <option value="nextjs">NextJs</option>
          </Select>
        </div>
        <div className="flex justify-between items-center gap-4 border-4 border-dotted border-teal-500 p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          className="h-72 mb-12"
          placeholder="Write Something..."
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
