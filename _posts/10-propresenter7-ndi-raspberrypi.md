---
tag: "Web Development"
title: "ProPresenter 7 NDI Raspberry Pi FIX TITLE>"
excerpt:
    "We recommend creating a new Next.js app using create-next-app, which sets
    up everything automatically for you. To create a project"
coverImage: "/assets/post/post.png"
date: "Fri 14th Aug, 2020"
author:
    name: Ahmed Mudassir
    twitter: "https://twitter.com/ahm3dx_"
    picture: ""
ogImage:
    url: "/assets/meta/blogSimple.jpg"
---

Last week I took the church's laptop to home to make an upgrade from HDD to SSD
because was running to slow to be practical. Also, I upgraded from ProPresenter
6 to ProPresenter 7. 

The biggest problem of the laptop was that we needed 3 separated screens, but
we only have 2 video outputs. Until now we were using a splitter and doing
different tricks to make it work, but now , while testing the ProPresenter 7
I've seen an interesting feature: **support for NDI** and ability to add NDI
screens.

So an idea had come into my mind: what if, somehow, I could add a separate 
screen through NDI.

**insert picture of PrePresenter 7 screen settings menu**

So I searched my Raspberry Pi 3. But first I tried on my own PC to test through
OBS which I knew supports NDI if it works. After settings the correct NDI
screen name in both ProPresenter 7 and OBS everything just worked.

**insert picture of OBS working**

Next step is to put an NDI software on Raspberry Pi. After some search on
internet I've found (Dicaffeine)(https://dicaffeine.com/about) which, for free,
can display an NDI player.

So I booted up on the SD card Raspbian, I installed Dicaffaine and after 
spending some time figuring out how to directly connect through an ethernet
cable the Raspberry Pi with the the laptop it was time to test. It worked,
it just worked. Next day, Sunday, the Raspberry Pi worked flawlessy without
problems through the entire service.


