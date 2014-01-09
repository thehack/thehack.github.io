---
layout: post
title: "Distraction-free Devotional Reading at BibleGateway.com"
date: 2014-01-08 00:00:00
categories: bible devotions javascript
icon: icon-bar-chart
thumb: rom8-thumb.png
color: _yellow 
---
I am a big fan of [Bible Gateway](http://biblegateway.com). I love to use their study aids and variety of translations. They have developed an impressive tool for both Bible study and devotional reading. One feature I wish they had is distraction-free reading. I like to use their site for Bible reading on my laptop, but I find the text is small and the ads are everywhere - it can be hard to focus.

I have built a small tool to address this. It's a bookmarklet which you can conveniently drag to the bookmarks toolbar of your modern web-browser and click to make scripture pop out and distractions go away on [BibleGateway.com](http://biblegateway.com). 

#####Here is how to use it:
1. Copy or drag this link to your browser's bookmarks toolbar<a href="javascript:(function()%7Bvar%20main%20%3D%20document.getElementById('main-col')%3Bvar%20stuffToHide%20%3D%20%5B'.content-rightcol'%2C%20'.passage-scroller'%2C%20'.passage-updatetranslation'%2C%20'.footnotes'%2C%20'.passage-parallel-button'%2C%20'%23sig'%2C%20'.header-rule'%2C%20'%23nav-col'%2C%20'%23banner'%2C%20'%23merch-bottom'%2C%20'%23search-box'%2C%20'%23rotate-link'%2C%20'%23leader-wrap'%2C%20'%23page-options-button'%5D%3Bfor%20(var%20i%20%3D%200%3B%20i%20%3C%20stuffToHide.length%3B%20i%2B%2B)%20%7Bif%20(document.querySelector(stuffToHide%5Bi%5D)%20!%3D%20null)%20%7Bdocument.querySelector(stuffToHide%5Bi%5D).remove()%3B%7D%3B%7Dmain.style%5B'font-size'%5D%20%3D%20'30px'%3Bmain.style%5B'line-height'%5D%20%3D%20'150%25'%3Bmain.style%5B'margin-left'%5D%20%3D%20'50px'%3Bdocument.querySelector('.content-col').style%5B'margin-right'%5D%20%3D%20'40px'%7D)()
">Bible GW 4 Reading</a>
2. Do a Google or BibleGateway.com search to find your [passage](http://www.biblegateway.com/passage/?search=romans%208&version=NLT)
3. Click on the new 'Bible GW 4 Reading' button in your bookmarks toolbar.
4. Dig In!
5. If you have trouble or another idea to improve this, shoot me an email.


