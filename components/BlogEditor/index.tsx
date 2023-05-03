import React, { useState } from "react";
import Button from "../../components/Button/Button";
import DatePicker from "react-datepicker";
import TextareaAutosize from "react-textarea-autosize";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import "react-datepicker/dist/react-datepicker.css";

const BlogEditor = ({ post, close, refresh } : any) => {
  const Router = useRouter()
  const { theme } = useTheme();
  const [currentTabs, setCurrentTabs] = useState("BLOGDETAILS");
  const [blogContent, setBlogContent] = useState(post.content);
  const [currentFileName, setCurrentFileName] = useState<any>(Router.query.slug || undefined)
  const [blogVariables, setBlogVariables] = useState({
    date: post.date,
    title: post.title,
    tagline: post.tagline,
    preview: post.preview,
    image: post.image,
  });


  const pushNewPath = () => {
    Router.push({
      pathname: `/blog/${currentFileName}`,
    }, 
    undefined, { shallow: true }
    )
  }

  const savePost = async () => {
    if (process.env.NODE_ENV === "development") {
      // renameSlug()
      await fetch("/api/blog/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: post.slug,
          content: blogContent,
          renameSlug: currentFileName !== post.slug,
          newFileName: currentFileName.replace(/ /g,"_"),
          variables: blogVariables,
        }),
      }).then((data) => {
        if (data.status === 200) {
          close();
          if (currentFileName !== post.slug) return pushNewPath();
          refresh();
        }
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  return (
    <div
      className={`fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container my-20">
        <div className="mt-10">
          <div className="z-10 sticky top-12">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl">{blogVariables.title}</h1>
              <div className="flex items-center">
                <span onClick={savePost} >
                  <Button text='Save'  />
                </span>
                <span onClick={close} >
                  <Button text='Close' />
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span onClick={() => setCurrentTabs("BLOGDETAILS")}>
                <Button
                  text='Blog Details'
                  // type={currentTabs === "BLOGDETAILS" && "primary"}
                />
              </span>
              <span onClick={() => setCurrentTabs("CONTENT")} >
                <Button 
                    text='Content'  
                  // type={currentTabs === "CONTENT" && "primary"}
                />
              </span>
            </div>
          </div>
        </div>
        {currentTabs === "BLOGDETAILS" && (
          <div className="mt-10">

            <div className="mt-5 flex flex-col items-center">
              <label className="w-full text-sx opacity-50">Slug</label>
              <input
                value={currentFileName}
                onChange={(e) =>
                  setCurrentFileName( e.target.value.replace(/ /g,"_") )
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>

            
            <div className="mt-5 flex flex-col items-center">
              <label className="w-full text-sx opacity-50">Date</label>
              <DatePicker
                selected={new Date(blogVariables.date)}
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                onChange={(date : any) => { //check typescript date type
                  setBlogVariables({
                    ...blogVariables,
                    date: date.toISOString() ,
                  });
                }}
              />
            </div>
            <div className="mt-5 flex flex-col items-center">
              <label className="w-full text-sx opacity-50">Title</label>
              <input
                value={blogVariables.title}
                onChange={(e) =>
                  setBlogVariables({ ...blogVariables, title: e.target.value })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>

            <div className="mt-5 flex flex-col items-center">
              <label className="w-full text-sx opacity-50">Tagline</label>
              <input
                value={blogVariables.tagline}
                onChange={(e) =>
                  setBlogVariables({
                    ...blogVariables,
                    tagline: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex flex-col items-center">
              <label className="w-full text-sx opacity-50">preview (SEO)</label>
              <textarea
                value={blogVariables.preview}
                onChange={(e) =>
                  setBlogVariables({
                    ...blogVariables,
                    preview: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                // type="text"
              ></textarea>
            </div>
            <div className="mt-5 flex flex-col items-center">
              <label className="w-full text-sx opacity-50">Image</label>
              <input
                value={blogVariables.image}
                onChange={(e) =>
                  setBlogVariables({
                    ...blogVariables,
                    image: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
          </div>
        )}

        {currentTabs === "CONTENT" && (
          <div className="mt-10">
            <div className="flex flex-col items-center">
              <label className="w-full text-sx opacity-50">Content</label>
              <TextareaAutosize
                className="w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl"
                value={blogContent}
                onChange={(e) => setBlogContent( e.target.value )}
              ></TextareaAutosize>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogEditor;
