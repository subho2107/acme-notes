# ACME NOTES

[https://acme-notes-tirtho.netlify.app/](https://acme-notes-tirtho.netlify.app/)

## Overview
This was an assignment, where we have to build a landing page for a SaaS company called Acme, who is trying to onboard users for its new notes taking application and the main goal of the page is to maximise the number of user onboards, be it with eye catching and snappy animations, faster load times, and clear CTAs. 

## Tech stack
- I have used React.js + Vite for making the front end of this static website
- Tailwind CSS for styling
- Framer-motion for the different animations
- Material UI for the icons


## Page Load Time

#### 2.99 seconds load time & 2.3s speed index


<img width="716" alt="Screenshot 2024-07-22 at 6 44 11 AM" src="https://github.com/user-attachments/assets/71171691-2c85-4c83-ae63-ec53541c0374">

<img width="1680" alt="Screenshot 2024-07-22 at 6 31 43 AM" src="https://github.com/user-attachments/assets/f0bdc60a-9202-4228-b0e2-9a51de68b3d3">


- Used [chromeExtension](https://chromewebstore.google.com/detail/page-load-time/fploionmjgeclbkemipmkogoaohcdbig) this chrome extension for load time and have done hard refresh while measuring to simulate how much -- would it be for a new user
- Used Ligthouse for speed index

## Optimizations done

- Have converted all assets to new image formats webp and avif, which have better compression and thus reduce load time
- Lazy loaded all framer animations using LazyMotion provided by framer itself
- Lazy loaded and dynamically imported all image assets(when they come in view) which drastically reduced load time



