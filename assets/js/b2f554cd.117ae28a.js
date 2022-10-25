"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2022-10-24-writing-cold-outreach-email","metadata":{"permalink":"/blog/2022-10-24-writing-cold-outreach-email","editUrl":"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/blog/2022-10-24-writing-cold-outreach-email/index.md","source":"@site/blog/2022-10-24-writing-cold-outreach-email/index.md","title":"Writing a cold outreach email","description":"Today I\'m looking at something non-technical! How to write a good email. Specifically how to write an email to a prospective customer to get them interested in my product.","date":"2022-10-24T00:00:00.000Z","formattedDate":"October 24, 2022","tags":[{"label":"live","permalink":"/blog/tags/live"},{"label":"apollo","permalink":"/blog/tags/apollo"},{"label":"outreach","permalink":"/blog/tags/outreach"},{"label":"email","permalink":"/blog/tags/email"}],"readingTime":3.305,"hasTruncateMarker":true,"authors":[{"name":"James Harrison","title":"Solution Architect","url":"https://jharrison.io","imageURL":"https://github.com/jharrisonio.png","key":"jharrison"}],"frontMatter":{"slug":"2022-10-24-writing-cold-outreach-email","title":"Writing a cold outreach email","authors":"jharrison","tags":["live","apollo","outreach","email"]},"nextItem":{"title":"Writing an NX plugin for automating Nest and Prisma","permalink":"/blog/2022-10-23-nx-plugin-nest-prisma"}},"content":"Today I\'m looking at something non-technical! How to write a good email. Specifically how to write an email to a prospective customer to get them interested in my product. \\n\x3c!--truncate--\x3e\\n\\n## What I already know\\nI\'ve read a lot about pitching and selling in the past, but unless you\'re doing it every day the details can get a bit foggy. I\'m going to start by refreshing my memory of things I\'ve read before.\\n\\n[Pitch Anything by Oren Klaff](https://www.goodreads.com/book/show/10321016-pitch-anything)\\nThis book introduces a technique called the STRONG method.\\n\\nS = Set the Frame\\nT = Tell the Story\\nR = Reveal the Intrigue \\nO = Offer the Prize\\nN = Nail the Hook-Point\\nG = Get the Deal\\n\\nIt revolves more around pitch meetings rather than emails. I\'ll consider these concepts but continue looking for others\\n\\n\\n[Cold Email Statistics by Gong](https://www.gong.io/blog/cold-email-stats/)\\nI really like the summaries that Gong provide based on the data they collect form their sales platform. Here are the key takeaways from this article:\\n\\n1. Send longer emails (4+ sentences are 15x more likely to book a meeting). 30 - 150 words\\n2. Make it personalized, direct and intentional in every sentence\\n3. Don\'t talk about ROI (-15% success rate)\\n4. Use the \\"interest CTA\\". There are 3 types of CTAs, the \\"interest\\" one performs best at 30%\\n5. Don\'t ask for thoughts (-20%)\\n6. Don\'t guilt them (saying \\"I never hear back...\\"). I wouldn\'t do this anyway\\n7. Use a \\"nicety\\". Saying \\"hope all is well\\" actually increases success by 24%\\n\\nThey also have some great [cold email templates](https://www.gong.io/content/cold-email-templates/) and [highly effective email CTAs](https://www.gong.io/wp-content/uploads/2021/01/3-43-Highly-Effective-Email-CTAs.pdf)\\n\\n\\n## Further research\\nI really like the Gong email templates but I want to see if there are some other ones out there on the web. A quick Google search for \\"cold email templates\\" gives me a few good ones:\\n\\n* [7 Best cold Email Templates for Effective Sales Outreach](https://elasticsales.com/cold-email-templates/)\\n* [15 Cold Email Templates to Generate More Leads](https://mailshake.com/blog/cold-email-templates/)\\n* [How to write cold email best practices](https://www.linkedin.com/pulse/how-write-cold-email-best-practices-5-templates-)\\n\\n\\nFlicking through the results above I like the following forumlas.\\n\\n### AIDA (attention-interest-desire-action)\\n\\n```text wordWrap\\nHi {{name}},\\n\\nWhat would you do with an extra 10 hours each week?\\n\\nI ask because clients like yourself have seen savings like these \u2013 if not more \u2013 after adding our software to their tech stacks.\\n\\nJust ask experts like Gary Vaynerchuk, Tim Ferriss, and Malcolm Gladwell, who we\u2019re happy to count as satisfied customers.\\n\\nI\u2019d love to set up a time to walk you through a personalized demo. Would you have some free time next week to connect?\\n```\\n\\n\\n### Mention a competitor\'s product\\nIn my case it wouldn\'t be a competitor, but a piece of software or a tool. \\n\\n```text\\nHi {{Name}},\\n\\nJust ran across your website and noticed you were using {{Your competitor\u2019s product}}. How are you liking it? I run a {{service}} called {{your company}}.\\n\\nIt\u2019s just like {{your competitor\u2019s product}}, only {{key differentiator}}. If you\u2019re up for it, I would love to jump on a quick call with you and get your opinion on how we could make {{prospect\u2019s company}} better (and see if it would make sense for us to work together).\\n\\nWould {{date and time}} be a good time for you? (If not, I\u2019m flexible, just let me know).\\n```\\n\\n\\n## Summary\\nHere are the things I like the most out of all this research:\\n\\n1. More than 4 sentences but less than 150 words\\n2. Make it personal - introduce myself, add something specific about their business\\n3. Mention they are using X technology (or any other info I can find about the company)\\n4. If they are in my area, mention I am nearby\\n5. Add a nicety\\n6. Finish with a question, \\"Would you be interested..\\" or \\"Should we discuss this in more detail..\\"?\\n\\nI finished the new template and sent it to the first 100 contacts. Let\'s wait and see how it performs when A/B tested against the old one."},{"id":"2022-10-23-nx-plugin-nest-prisma","metadata":{"permalink":"/blog/2022-10-23-nx-plugin-nest-prisma","editUrl":"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/blog/2022-10-23-nx-plugin-nest-prisma/index.md","source":"@site/blog/2022-10-23-nx-plugin-nest-prisma/index.md","title":"Writing an NX plugin for automating Nest and Prisma","description":"I\'m about to resume working on a side project, a tool that helps developers build things faster. Before I start coding I feel I need to revisit the philosophy behind this tool and just get some clarification for myself. Sometimes it\'s really easy to get lost in the implementation and forget what you\'re actually building.","date":"2022-10-23T00:00:00.000Z","formattedDate":"October 23, 2022","tags":[{"label":"live","permalink":"/blog/tags/live"},{"label":"nx.dev","permalink":"/blog/tags/nx-dev"},{"label":"nestjs","permalink":"/blog/tags/nestjs"},{"label":"prisma","permalink":"/blog/tags/prisma"},{"label":"angular","permalink":"/blog/tags/angular"},{"label":"schematics","permalink":"/blog/tags/schematics"}],"readingTime":9.955,"hasTruncateMarker":true,"authors":[{"name":"James Harrison","title":"Solution Architect","url":"https://jharrison.io","imageURL":"https://github.com/jharrisonio.png","key":"jharrison"}],"frontMatter":{"slug":"2022-10-23-nx-plugin-nest-prisma","title":"Writing an NX plugin for automating Nest and Prisma","authors":"jharrison","tags":["live","nx.dev","nestjs","prisma","angular","schematics"]},"prevItem":{"title":"Writing a cold outreach email","permalink":"/blog/2022-10-24-writing-cold-outreach-email"}},"content":"import Screenshot1 from \'./Screen Shot 2022-10-23 at 3.28.57 pm.png\';\\nimport Screenshot2 from \'./Screen Shot 2022-10-23 at 4.53.18 pm.png\';\\nimport Screenshot3 from \'./Screen Shot 2022-10-23 at 5.47.13 pm.png\';\\n\\n\\nI\'m about to resume working on a side project, a tool that helps developers build things faster. Before I start coding I feel I need to revisit the philosophy behind this tool and just get some clarification for myself. Sometimes it\'s really easy to get lost in the implementation and forget what you\'re actually building.\\n\x3c!--truncate--\x3e\\n\\n## The vision\\nThe guiding vision stems from my low-code experience. I\'ve seen the incredible benefits this technology can bring. Unprecedented speed, baked-in quality control and as much automation as possible. I\'ve also seen the lack of enthusiasm from developers who are used to writing code. The visual drag-and-drop interface is just so far removed from what they are used to that it creates a huge barrier. Another issue is accessibility. The good low-code platforms all cost a fortune, create vendor lock-in and hide away the details.\\n\\nWhile my ultimate goal is to create a full-scale, full-stack platform - eventually - I recognize that I have to start small and gradually build up functionality. \\n\\n\\n## The goal\\nThe goal is simple; create a way of developing web apps that is faster, better and easier than the current status quo.\\n\\nFor me that means looking at past projects and replaying them, looking at how each phase could have been done better.\\n\\n**Planning**\\nThis is often a phase that represents duplicate effort. Architects write up specs in a wiki which a developer then has to bring to life. What if you could do both these things in a single step? What if the specs became the app?\\n\\n**Coding**\\nJust the physical act of typing everything out verbose is very time consuming. Why are we still coding the same way we were 20 years ago? Surely there\'s got to be a faster way, and I don\'t think the answer is AI like Github Copilot. These tools just write more code, they don\'t remove the need for coding. \\n\\n**Features**\\nEven when using frameworks and pre-built libraries, we find ourselves re-creating things over and over again. Authentication, error handling, logging, roles & permissions are a few. Features like a basic CMS, notifications, case management, payments, user profiles are others that seem to get re-built for every project when there is very little difference. \\n\\nI\'ve decided to start in the middle, the Coding phase, and spread out both ways from there.\\n\\n## The hypothesis\\nFrameworks like NestJS and Ruby on Rails provide wrappers around standard languages that means we have to write less code to achieve our goals. But they are still pretty verbose, and we are still writing code in a text editor.\\nThey provide more flexibility than is needed. My hypothesis is that 90% of use cases could be satisfied with a highly opinionated language that sacrifices flexibility for speed, quality and automation. And this language should be able to be presented in a variety of user interfaces. Perhaps text-based, perhaps visual. \\n\\nThere are a finite amount of commands needed to build an application. Here\'s a quick list off the top of my head:\\n\\n1. Create a workspace (project)\\n2. Create an application\\n3. Define a data model\\n4. Expose a REST endpoint\\n5. Integrate with third parties\\n6. Expose a GraphQL service\\n7. Dispatch events over websockets\\n\\nWhile building logic, these are the key operations needed:\\n1. Defining/setting variables\\n2. Loops\\n3. Conditions\\n4. Calling functions\\n5. Raising/handling errors\\n\\nI\'m sure I\'ve missed some, but this is enough to get the gist. Almost everything programmers do, regardless of the language falls into one of those categories. In Javascript, how many ways can you write a loop? Too many. Sure, they all have their benefits but the sheer verbosity of it surely outweighs the benefits for most use cases.\\n\\n\\n## The method\\nInstead of jumping straight into a user interface I\'m going to build an API that can be used to build an entire application from start to finish. This can be called from a CLI for a start, to have it act on a local project. I\'m going to make use of a few tools and frameworks that have already done a lot of work to automate things:\\n\\n**nx.dev** for managing a monorepo. It offers really smart dependency management, including sharing them across apps and performing impact analysis (only build what changed). It also offers a really good schematics library that lets me write code generators that can even analyse the Abstract Syntax Tree (AST) of a file and apply manipulations programmatically. Simply put, it allows me to *modify* files, not just generate them from templates.\\n\\n**NestJS + Prisma** for the actual underlying codebase. It\'s an easy framework to learn and provides the necessary abstraction on top of REST, GraphQL, Websockets and Microservices that I would have to write myself if I didn\'t use it. \\n\\n## Current progress\\nI\'m at the stage where I can create a monorepo using nx.dev, spin up a microservice, rename/delete etc. I\'m working on getting Prisma initialised in the NestJS microservice. At first glance the command `prisma init` just creates a couple of files but I wonder if there\'s more to it than that. Perhaps I can just create these files as templates and copy them into the microservice, or perhaps I actually need to run `prisma init` on the microservice.\\n\\nLet\'s try the first method and see if it works.\\n\\nThe current CLI is called by typing `$ vast-cli <command> [options]`  \\nI set up an alias so I can call it with the command `vc`\\n\\n`$ vc ws new workspace-1`  \\nCreates a workspace (ws is an alias for workspace)\\n\\n\\n`$ vc ms new microservice-1`  \\nCreates a new NestJS microservice inside the workspace.\\n\\n<img src={Screenshot1} />\\nLooks pretty good! Although I stupidly called the file `prisma.schema` instead of `schema.prisma`. I\'ll manually rename that for now because re-building everything isn\'t the fastest process. Then I\'ll try and run the microservice.\\n\\nBy default the microservice listens on 3000. Will need to change that. But overall the microservice boots ok without errors. Get Prisma running involves a few more steps:\\n\\n1. Add a default model\\n2. Dynamically generate the prisma client with `npm install @prisma/client` and `prisma generate`\\n3. Creating a Prisma service inside NestJS\\n\\nLet\'s check if there\'s an existing NX.dev plugin for doing all this. Or perhaps a NestJS schematic.\\n\\n\\n## Implementing the NestJS + Prisma schematic\\nI found an existing schematic that seems decent at [notiz-dev/nestjs-prisma](https://github.com/notiz-dev/nestjs-prisma). To get this up and running I think I\'ll have to do the following steps:\\n\\n1. Add `nestjs-prisma` to the microservice\'s default dependencies\\n2. Add `@prisma/client` to the dependencies too\\n3. Add `PrismaModule` to the imports section of `AppModule`\\n\\n## A potential problem\\nI realise my CLI is a wrapper around the `nx` CLI which is a wrapper around the `nest` CLI which is a wrapper around the `ng` (Angular) schematics CLI. Is there benefit in preserving this chain or should I try and cut out some middlemen? I remember reading somewhere that by using NX, it understands what\'s changed in your project and can build it faster. Probably worth validating that before continuing.\\n\\nIt looks like NX provides some smart caching around running tasks, but I don\'t know if that will apply for my scenario. I can\'t see any benefit of using NX instead of the NestJS CLi directly. That being said it\'s kind of nice to use a single tool instead of switching tools depending on context. I\'m going to proceed using NX for most things until I hit an issue.\\n\\nBack to Prisma...\\n\\n## Improving the build process\\nI\'ve made the changes above and in the process I also improved the build/publish process to be faster and completed with a single command. Instead of building/publishing 3 projects separately, I can do it in 1. Before it worked like this:\\n\\n```sh\\n$ yarn nx publish nx-workspace\\n$ yarn nx publish nx-microservice\\n$ yarn nx publish vast-cli\\n``` \\n\\nNow, I added [implicit dependencies](https://nx.dev/reference/project-configuration#implicitdependencies) to `vast-cli/project.json` and change the `publish` task to have [dependsOn](https://nx.dev/reference/project-configuration#dependson) all \'publish\' tasks of its dependencies. This can be achieved with the `^` character:\\n\\n```json\\n{\\n    ...\\n    \\"publish\\": {\\n        ...\\n       \\"dependsOn\\": [\\"^publish\\", \\"bump\\", \\"build\\"]\\n    },\\n    ...\\n}\\n\\n```\\n\\n## A microservice with a database\\nHopefully with the new `nestjs-prisma` schematic installed, I can start using Prisma immediately in my microservice. Let\'s try it out.\\n\\n```sh\\n$ vc ws new workspace-1 && cd workspace-1\\n$ vc ms new microservice-1\\n```\\n<img src={Screenshot2} />\\nWell...something went wrong. The error logged looked like this:\\n\\n`error Couldn\'t find any versions for \\"nestjs-prisma\\" that matches \\"^4.5.0\\"`\\n\\nI was trying to install the schematic with the same version as Prisma, which obviously isn\'t going to work. Let me update my dependency list and republish.\\n\\nSuccess! Next up:\\n\\n1. Automate the creation/manipulation of Prisma models (and run `prisma generate`)\\n2. Automate the deployment of the microservice (`nx serve && prisma migrate`)\\n\\n## Generating models\\nI need to check if there\'s a CLI tool or schematic that already exists for generating models. Perhaps in Nest or Prisma itself. Doesn\'t look like it. Let\'s get to work.\\n\\nA new NX generator needs to be created in my `nx-microservice` plugin. First I need to get my head around the plugin/generator structure because it still confuses me.\\n\\nThe problem is with the namespacing of plugins. It\'s hard to have a plugin work with more than 1 type of object because you need 1 generator per action (create, rename, update, etc). For example:\\n\\nPlugin = @vast/nx-microservice  \\nGenerator = app (create a new app)  \\n`nx g @vast/nx-microservice:app`\\n\\nIf I wanted to add a function to rename the microservice, I could do this:\\n`nx g @vast/nx-microservice:rename`\\n\\nBut then I can\'t have a generator to rename a data model, or a service in the future. This leaves 2 possible options:\\n\\n1. Prefix generator names with colons (e.g. `app:rename` and `model:rename`)\\n2. Create a single plugin for each type of object (e.g. `nx-microservice`, `nx-model`, `nx-service`, etc)\\n\\nI think I\'ll try the first option and see if it\'s viable.\\nGenerate a new generator:\\n\\n```sh\\n$ yarn nx g @nrwl/nx-plugin:generator model\\n$ yarn nx g @nrwl/nx-plugin:generator model:remove\\n```\\n\\n<img src={Screenshot3} />\\nLooks like it doesn\'t like the colon in the generator name. Using an underscore works though. This means I could potentially put everything into a single plugin, which would be much neater. Let\'s see what it might look like...  \\n\\n\\nPlugin: `nx-vast`\\nGenerators:  \\n\\n| Generator | Description |\\n|--------------|-----------|\\n| `preset` | Workspace preset, with with all template files and logic for getting set up. |\\n|`microservice`| Create a new microservice  |\\n|`microservice_move`| Rename a microservice (actually handled by `@nrwl/workspace:move`)  |\\n|`microservice_remove`| Delete a microservice (actually handled by `@nrwl/workspace:remove`)  |\\n|`model`| Create a new Prisma model  |\\n|`model_move`| Rename a model  |\\n|`model_remove`| Delete a model (and run impact analysis) | \\n|`model_change`| Update the definition of a model  |\\n|etc...  |\\n\\n This structure looks OK, it will get big but manageable. There will be some benefits in terms of shared code. It will require some refactoring of the CLI. \\n\\n\\n ## Wrap up\\n I\'ve run out of time today, but I\'m happy with the progress. I\'ve also found the blogging process to be helpful, it forces me to think things through before actioning them. \\n\\n 1. Got Prisma schematics installed and working with the Microservice generator\\n 2. Improved the publishing process to be completed in a single command\\n 3. Merged `nx-workspace` and `nx-microservice` plugins into a single library called `nx-vast`\\n\\n\\n Still to do:\\n\\n 1. Write the generators to create a new data model\\n 2. Figure out how to properly refactor the entire app if a data model changes name\\n 3. Figure out what to do with breaking changes, i.e a data model is deleted and other functions are broken.\\n\\n\\n For the last piece, perhaps I could build an API that returned typescript errors. For another day..."}]}')}}]);