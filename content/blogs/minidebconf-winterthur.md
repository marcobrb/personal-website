+++
title = 'MiniDebConf Winterthur'
date = '2026-08-24'
draft = false
+++

### My experience at MiniDebCamp and MiniDebConf @ Winterthur


![What happened?](/minidebconf_winty/ch2026-74-closing-ceremony.av1.jpg)


[Link to the ConfPage.](https://ch2026.mini.debconf.org/)

Thanks to Debian for paying for my stay. This was an extremely important experience: I understood where I want (and can) contribute to the project the most.

#### Tuesday

I arrived just in time for the [packaging workshop](https://ch2026.mini.debconf.org/talks/9-packaging-workshop/), given by Andreas Tille, former DPL.

The workshop dealt with fixing some bugs in existing debian packages, e.g. the version control system or the homepage link. It had the idea, in Adreas’ words, of showing the (or better, one of the possible) workflows of Debian packaging.

Trying to find a package to debug, coincidentally Andreas found a package that he already fixed but forgot to upload to the Debian archive!!

So I asked myself: is it possible that there are many cases like these, where developers are fixing packages and then forgetting to upload?

We could just:
  - Check the VCS of the package in the archive.
  - See if there is a mismatch between the changelog file with the uploaded version in the archive.
  - Run this for every package in the archive.

It often happens that you rediscover things smart people have already thought about: this is basically [`vcswatch`](https://salsa.debian.org/qa/qa/-/blob/master/data/vcswatch/vcswatch?ref_type=heads)

#### Wednesday

André Hochuli of [Filasez](https://filasez.ch/team/) lead us through a tour of the city of Winterthur. [Interesting stuff!](https://www.srf.ch/news/schweiz/aelteste-besetzung-der-schweiz-eigentuemerin-hat-genug-gisi-in-winterthur-droht-raeumung)

In the afternoon Lunalec organized a trekking near the river Toss of Winterthur. 

No photos here! You should just come next time!

#### Thursday

In the morning I dived in the Debian documentation to get more familiar with the packaging process. I also started looking at outstanding bugs in the Debian bug tracking system to get my hands dirty.

- Many bugs are extremely old or outdated.
- (This might be obvious) There is an extreme variance in the “difficulty” of open bugs: either they are “a line is missing here, here is what it should be”, or “this package needs a complete rework”.
    - Just survivorship bias: the easy and unimportant bugs nobody wants to do because it’s “shallow work” and if the package maintainer is not active uploading is just going to be a tedious process, and the complete reworks nobody wants to do either because, if I’m not using this package and it has only a `popcon` of 10, is it worth the effort?

In the afternoon couldn’t participate because I had to do some stuff for my PhD applications :( So much do to and so little time to do it!

#### Friday

I got familiar with the Universal Debian Database, which is an extremely useful resource to get information about the Debian archive.

- I wrote some queries to find bugs similar to what the Bug of the day does (the page is updated every week ?)

I asked Stefano Rivera about this kind of bugs. Did it make sense to do a Non-mantainer-upload just to fix the vcs or the homepage weblink? He honestly said no, especially for packages that are used by very little people. 

During the workshop this was discussed at large: is it better for new contributors to work on packages that are not widely used, so the risk of damaging / wasting time is low? Does it make sense to work on packages that are not widely used? What about packages that are of vital importance for the few people that use them?

At the end of the day, I reached this kind of conclusion for Debian (which is the same conclusion anyone reaches when trying to contribute to a project of any kind that they like, even more on a voluntary basis): just contribute to what is dear and important to you.

To me, this is `salsa-ci`: infrastructure to test, build, and reproduce the debian packaging workflow. So I went back to this MR request and messaged Jochen to see if it made sense to start implementing custom DEB_BUILD_OPTIONS and PROFILES directly in debrebuild. He said yes, and that's what I did during the weekend.

#### Saturday

MiniDebConf!

I was looking forward to watching Andreas Tille recall his experience as a DPL, and see what he would say about LLMs usage in Debian.

Coincidentally, the voting for the general resolution about LLM usage in Debian ended, and results were available. Contrary to what I would have expected (?), the consensus aimed at asking for responsible usage.

I’m not sure what my complete vote would have been, and I don’t what to think too much about it. But I’m sure that proposal E would have been my first preference.

The talks about using Debian in schools systems, and the importance of doing so, were extremely interesting. 

You can find the video of all the talks [on the Schedule page](https://ch2026.mini.debconf.org/schedule/). Thanks to the video team!

#### Sunday

I mostly worked on debrebuild while listening and not listening to talks.

[Here is the final PR](https://salsa.debian.org/debian/devscripts/-/merge_requests/662)

Thanks to Jochen for reviewing. He also proposed to work a new tool to cover some usescases that debrebuild can’t do!!! Amazing!!!

I got to know Ralf Jung during lunch. Convinced me in very little time to just do rust instead of C or derivatives (to be honest, there was no kind of resistance from me at all - I’m just a Python guy!) 

### So what?

I decided to extend my stay in Winterthur for a week while I work more on debrebuild, my actual daily job, and other stuff. 

I am extremely grateful for being able to take advantage of this opportunity. 

Thanks to [Manut]() and [Andre]() for organizing. Thanks to [Filasesz]() for hosting. 

Thanks to [Stefano]() for answering my questions. Thanks to [Ralf](), [Nikos](), and others for the chats!

I hope this happens again.