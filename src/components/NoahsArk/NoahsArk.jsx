import React, { useState } from "react";
import "./NoahsArk.css"; // Add styling here

const NoahsArk = () => {
  const [activeStory, setActiveStory] = useState(null);

  const storyContent = {
    Noah: {
      title: "Noah's Ark",
      description:
        "God instructed Noah to build an ark to save his family and pairs of animals from a great flood. The ark was big enough to carry Noah, his family, and every animal to safety. After the floodwaters receded, Noah and his family repopulated the earth, and God made a promise to never again destroy the earth with a flood.",
      imgSrc:
        "https://media.istockphoto.com/id/182375184/photo/noahs-ark.jpg?s=2048x2048&w=is&k=20&c=3RquTVxWYmRnz2ybX3cIRddIXcFC1W7zRUHRBI-5Y1g=",
    },
    Animals: {
      title: "The Animals",
      description:
        "God sent pairs of every kind of animal to the ark to keep them safe from the flood. Each pair of animals was carefully chosen to ensure that their species would survive the flood and continue to live on Earth after the waters receded.",
      imgSrc:
        "https://media.istockphoto.com/id/1477971048/vector/noahs-ark-with-animals.jpg?s=2048x2048&w=is&k=20&c=x6WSktzyRWhyM6tCMLCrTQKzUjokZnFAWi_vxa9u4ts=",
    },
    Rainbow: {
      title: "The Rainbow Promise",
      description:
        "After the flood, God placed a rainbow in the sky as a sign of His promise to Noah and his descendants. The rainbow was a symbol of God's covenant, a promise that He would never again destroy the earth with a flood.",
      imgSrc:
        "https://media.istockphoto.com/id/2153725333/photo/close-up-of-colorful-paper-arc.jpg?s=2048x2048&w=is&k=20&c=AFp2n6cDtooMMtQ00EDL9CraRsifaEj2r5RdkBQpvys=",
    },
  };

  const handleStoryClick = (story) => {
    setActiveStory(storyContent[story]);
  };

  return (
    <div className="ark-container">
      <div className="ark-header">
        <h1>Welcome to Noah's Ark!</h1>
        <p>Explore Bible stories with Noah and his animal friends!</p>
      </div>
      <div className="ark-stories">
        <div className="ark-story" onClick={() => handleStoryClick("Noah")}>
          <img
            src="https://media.istockphoto.com/id/182375184/photo/noahs-ark.jpg?s=2048x2048&w=is&k=20&c=3RquTVxWYmRnz2ybX3cIRddIXcFC1W7zRUHRBI-5Y1g="
            alt="Noah's Ark"
          />
          <h3>Noah's Ark</h3>
        </div>
        <div className="ark-story" onClick={() => handleStoryClick("Animals")}>
          <img
            src="https://media.istockphoto.com/id/1477971048/vector/noahs-ark-with-animals.jpg?s=2048x2048&w=is&k=20&c=x6WSktzyRWhyM6tCMLCrTQKzUjokZnFAWi_vxa9u4ts="
            alt="Animals"
          />
          <h3>The Animals</h3>
        </div>
        <div className="ark-story" onClick={() => handleStoryClick("Rainbow")}>
          <img
            src="https://media.istockphoto.com/id/2153725333/photo/close-up-of-colorful-paper-arc.jpg?s=2048x2048&w=is&k=20&c=AFp2n6cDtooMMtQ00EDL9CraRsifaEj2r5RdkBQpvys="
            alt="Rainbow"
          />
          <h3>The Rainbow Promise</h3>
        </div>
      </div>

      {activeStory && (
        <div className="story-detail">
          <h2>{activeStory.title}</h2>
          <p>{activeStory.description}</p>
          <img src={activeStory.imgSrc} alt={activeStory.title} />
          <button onClick={() => setActiveStory(null)}>Close Story</button>
        </div>
      )}
    </div>
  );
};

export default NoahsArk;
