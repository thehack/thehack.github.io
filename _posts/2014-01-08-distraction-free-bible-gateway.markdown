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
1. Copy or drag this link to your browser's bookmarks toolbar: <a href="javascript:(function()%7Bif(document.URL.search('biblegateway.com')%3D%3D-1)%7Bvar%20redirect%3Dconfirm('This%20Bookmarklet%20provides%20distraction-free%20reading%20on%20BibleGateway.com.%5CnGo%20there%2Csearch%20for%20your%20passage%2Cand%20then%20click%20the%20bookmarklet.%5CnWould%20you%20like%20to%20go%20there%20now%3F')%3Bif(redirect%3D%3Dtrue)%7Bwindow.location%3D'http%3A%2F%2Fbiblegateway.com'%7Delse%7Breturn%7D%7Dif(document.URL!%3D'http%3A%2F%2Fwww.biblegateway.com%2F')%7Bvar%20main%3Ddocument.getElementById('main-col')%3Bvar%20stuffToHide%3D%5B'.addthis_toolbox'%2C'.heading'%2C'.content-rightcol'%2C'.passage-scroller'%2C'.passage-updatetranslation'%2C'.footnotes'%2C'.passage-parallel-button'%2C'%23sig'%2C'.header-rule'%2C'%23nav-col'%2C'%23banner'%2C'%23merch-bottom'%2C'%23search-box'%2C'%23rotate-link'%2C'%23leader-wrap'%2C'%23page-options-button'%5D%3Bfor(var%20i%3D0%3Bi%3CstuffToHide.length%3Bi%2B%2B)%7Bif(document.querySelector(stuffToHide%5Bi%5D)!%3Dnull)%7Bdocument.querySelector(stuffToHide%5Bi%5D).remove()%3B%7D%3B%7Dmain.style%5B'font-size'%5D%3D'30px'%3Bmain.style%5B'line-height'%5D%3D'150%25'%3Bmain.style%5B'margin-left'%5D%3D'50px'%3Bdocument.querySelector('.content-col').style%5B'margin-right'%5D%3D'40px'%3Bvar%20h1%3Ddocument.querySelector('h1')%3Bvar%20aTag%3Ddocument.createElement('a')%3BaTag.setAttribute('href'%2C'http%3A%2F%2Fbiblegateway.com')%3BaTag.innerHTML%3D'New%20Search'%3Bh1.appendChild(aTag)%3B%7Delse%7Balert('Search%20for%20the%20text%20you%20want%20to%20read%20first%2Cthen%20click%20the%20bookmarklet%20for%20distraction-free%20reading.')%3Bwindow.location%3D'http%3A%2F%2Fwww.biblegateway.com%2F'%7D%7D)()">Bible GW 4 Reading</a>
2. Do a Google or BibleGateway.com search to find your [passage](http://www.biblegateway.com/passage/?search=romans%208&version=NLT)
3. Click on the new 'Bible GW 4 Reading' button in your bookmarks toolbar.
4. Dig In!
5. If you have trouble or another idea to improve this, shoot me an email.

If you'd like to see the code or make it better, check it out on [Github](https://github.com/thehack/distraction-free-bible-gateway)


