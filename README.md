
# Reaction Animation

Introducing a React component library that makes it super easy to add fun social media-style reaction animations to your projects. 🎉 Think of the cool emoji effects you see on Instagram Live – now you can easily implement them without any hassle using this library. 🚀

## Demo
![Demo GIF](https://s9.gifyu.com/images/SVV0d.gif)

## Installation

Install via NPM:

```bash
  npm install reaction-animation
```


Or via YARN:

```bash
  yarn add reaction-animation
```   
## Usage/Examples

```javascript
import React from "react";
import { AnimationContainer, useReactionAnimation } from "reaction-animation";

const ReactionObj = () => {
  return (
    <img
      src="https://cdn4.iconfinder.com/data/icons/reaction/32/shy-512.png"
      alt="alt"
      height={"40px"}
      width={"40px"}
    />
  );
};

const App = () => {
  const { reactionDetails, addReaction } = useReactionAnimation();

  return (
    <div className="App">
      <AnimationContainer
        reactionDetails={reactionDetails}
        style={{ height: "300px", width: "50%", border: "1px solid black" }}
      />

      <button
        onClick={() => {
          addReaction({ ReactionObj, animationDuration: 5 });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;


```


## Feedback

If you have any feedback, please reach out to us at hetpatel2312.hp@gmail.com


## 🚀 About Me
I'm a sofware developer developer...


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](http://linkedin.com/in/hetpatel2312/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://developerhet.netlify.app/)


## Authors

- [@developerHet](https://github.com/developerHet/)

