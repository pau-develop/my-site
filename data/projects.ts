const projects = [
  {
    name: "Pixel-junkyard",
    about: `A single page application to create and share your pixel art. 100% tested with jest & the React testing library`,
    prodLink: "https://pixel-junkyard.netlify.app/home",
    prodName: "pixel-junkyard.netlify.app",
    gitLink: "https://github.com/pau-develop/pixel-junkyard-front",
    gitBackLink: "https://github.com/pau-develop/pixel-junkyard-front",
    gitName: "github.com/pau-develop/pixel-junkyard-front",
    gitBackName: "github.com/pau-develop/pixel-junkyard-back",
    stack: `react, redux, framer-motion, canvas, styled-components, express, mongoose, mongodb, jwt, joi, jest, testing library`,
    features: [
      {
        title: "Register & Login",
        text: "Being logged is mandatory to view the contents of the site",
        img: "/junkpath01.png",
        alt: "Register/Login menu",
      },
      {
        title: "Community",
        text: "A list of users is displayed in the Community page. Clicking on any of those will bring up the profile page for that particular user.",
        img: "/junkpath03.png",
        alt: "Community page",
      },
      {
        title: "Profile",
        text: "Acces your own profile from the navigation menu, or check other users' profiles by clicking on any user from the Community page. In the profile page you can see the user avatar, the user gallery, and the total number of drawings, likes and dislikes, ",
        img: "/junkpath02.png",
        alt: "Profile page",
      },
      {
        title: "Gallery",
        text: "In the gallery section, all the drawings from the database displayed in pages of four drawings each. Clicking on a drawing will bring up the Drawing page.",
        img: "/junkpath04.png",
        alt: "Gallery page",
      },
      {
        title: "Drawing",
        text: "In the drawing section, a more detailed view & description of the drawing is displayed. Users can like/dislike any drawing by clicking on the green or red button under it. Clicking on the artist will bring up its profile.",
        img: "/junkpath05.png",
        alt: "Drawing page",
      },
      {
        title: "Canvas",
        text: "Use the canvas to create your artwork! Select the pencil tool, a pencil size and a color. Use left click on the canvas to paint. Eyesdropper tool is used to grab a color from the canvas, just select the eyesdropper and left-click on the location of the color inside the canvas.",
        img: "/junkpath07.png",
        alt: "Drawing page",
      },
      {
        title: "Save artwork",
        text: "Clicking on the disk icon in the canvas will bring up the Save Canvas menu. Users may give the drawing a name and a description and save it for everyone to see and rate.",
        img: "/junkpath08.png",
        alt: "Save drawing page",
      },
    ],
  },
];

export default projects;
