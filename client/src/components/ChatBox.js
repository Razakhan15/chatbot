import {
  ArrowPathRoundedSquareIcon,
  DocumentDuplicateIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ScrollableFeed from "react-scrollable-feed";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  //FETCH DATA FROM DB
  const fetchMessages = async () => {
    const { data } = await axios.get("https://chatbot-bxw0.onrender.com/api/posts");
    setMessages(data);
  };

  //POSTING DATA TO DB AND GETTING RESPONSE FROM THE OPENROUTER API
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "gryphe/mythomist-7b:free",
          messages: [{ role: "user", content: text }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      await axios.post("https://chatbot-bxw0.onrender.com/api/posts", {
        client: text,
        bot: data.choices[0].message.content,
      });
      setMessages([
        ...messages,
        { client: text, bot: data.choices[0].message.content },
      ]);
      setLoading(false);
    } catch (error) {
      alert(error);
      console.log(error);
      setLoading(false);
    }
    setText("");
  };

  return (
    <div className="bg-black relative h-screen overflow-hidden w-screen lg:w-full">
      <ScrollableFeed className="p-5 ">
        <div className="mb-32">
          {messages.map((message, i) => (
            <div key={i}>
              <div className="flex flex-col justify-end items-end mt-5 gap-2">
                <img
                  src="userIcon.jfif"
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
                <p className="bg-zinc-800 w-fit text-sm text-white p-2 rounded-lg rounded-tr-none">
                  {message.client}
                </p>
                <div className="text-zinc-700 flex gap-2 mr-5">
                  <PencilSquareIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <DocumentDuplicateIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start mt-5 gap-2">
                <img
                  src="girl.jfif"
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
                <p className="bg-pink-700 text-sm w-fit text-white p-2 rounded-lg rounded-tl-none">
                  {message.bot}
                </p>
                <div className="text-zinc-700 flex gap-2 ml-5 ">
                  <SpeakerWaveIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <HandThumbUpIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <HandThumbDownIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <ArrowPathRoundedSquareIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <PlayCircleIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <PencilSquareIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                  <DocumentDuplicateIcon className="h-4 w-4 hover:text-white hover:cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {loading && (
          <div className="shadow rounded-md lg:w-1/2 mb-32">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-pink-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-pink-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-pink-700 rounded col-span-2"></div>
                    <div className="h-2 bg-pink-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-pink-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ScrollableFeed>
      <div>
        <form className="absolute bottom-12 p-2 w-full bg-black flex gap-2">
          <div className="w-full flex justify-center items-center gap-5">
            <input
              type="text"
              value={text}
              className=" bg-black border text-white border-red-500 rounded-sm w-1/2  p-1 placeholder-zinc-700"
              placeholder="Type a message here..."
              onChange={(e) => setText(e.target.value)}
            />
            <button
              disabled={loading}
              className={loading ? "cursor-not-allowed" : "cursor-pointer"}
              onClick={handleClick}
            >
              <PaperAirplaneIcon className="h-10 w-10 hover:text-white bg-zinc-700 rounded-full text-white p-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
