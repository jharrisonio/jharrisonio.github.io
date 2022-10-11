---
slug: providing-quality-support-saas
title: "Providing quality support to SaaS customers"
authors: jharrison
tags: [saas, support]
---
## Introduction
At work we currently use Slack as a support channel. Our customers are invited to private channels and can chat to us 24x7. This is fantastic for realtime troubleshooting and quick resolution of issues, but it doesn't scale well and can be a huge overhead on the engineering team. It is also difficult to put in place any kind of triaging of issues. We end up helping customers with anything, regardless of whether or not it's a platform issue or an implementation question. I've been tasked with setting up proper support channels for our customers that can scale to thousands of users and reduce the burden on our engineering team.


### Key Requirements
A successful implementation would achieve the following:
 - Simple form for raising tickets, including custom field capture and screenshots
 - Help article suggestions to reduce number of tickets raised in the first place
 - Help centre articles & categories
 - SLA management for first response and next reply times
 - Integration: Between support platform and engineering platform (Azure Devops)
 - Integration: Raise tickets from Slack messages
 - Integration: Notify Slack channels of new tickets and comments on tickets

### Choosing a Platform
I didn't spend much time assessing the merits of different platforms. Our requirements are fairly basic, and I have experience with Zendesk already so it made sense to use it. I looked briefly at the various plans and feature limitations of each to make sure we wouldn't end up paying a fortune. The only feature that might push us into a higher bracket would be SLA management.

