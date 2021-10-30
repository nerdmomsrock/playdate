import React, { useState } from "react";

function Home() {
  const [showText, setShowText] = useState(false);
  console.log(showText);
  return (
    <div className="Home">
      <br />
      <h1>Welcome To PlayDate!</h1>
      <button onClick={() => setShowText(!showText)}>Click Here</button>

      {showText ? (
        <>
          <div className="left">
            <p className="intro">
              Are you single parenting like a boss, but interested in adding the
              chaos of dating to your already exhausting life? Sure, there are
              other dating sites. You've probably spent an annoying amount of
              hours surfing those, only to be discouraged by the assumption that
              it's easy for someone like you to find, maintain, and enjoy a
              relationship. We at PlayDate know just what you need. Enjoy our
              parent-centered profile builder, and find other single pringles
              looking to mingle who share your inability to participate in an
              impromptu cocktail hour. We encourage one night stands - if they
              solely consist of teamwork cleaning out the third row of the
              minivan and then falling asleep together during the six o'clock
              news.
            </p>
          </div>
          <div className="right">
            <img
              className="homePic"
              src="https://media.gettyimages.com/photos/couple-relaxing-on-sofa-while-moving-house-picture-id532097877?s=170667a"
              alt="exhausted pic"
            />
          </div>{" "}
        </>
      ) : null}
      <br />

      <h3>PlayDate....who needs lingerie when you can wear yoga pants?</h3>
    </div>
  );
}

export default Home;
