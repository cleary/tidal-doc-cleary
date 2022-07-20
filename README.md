# tidal-doc

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

There is a github action which automatically deploys changes to the main branch.

## How To: Manage your own fork in git/github

Github is a bit of a bugger, because it only allows you to fork a project once. If you are working on a fork with (for example) a big change/addition that's taking time to complete, and you need to make another change, this is a process I (@cleary) recommend following

### For a small change to an existing file

Browse to the main [tidal-doc repository](https://github.com/tidalcycles/tidal-doc) and open the file you want to modify in the github interface

Use the `edit` pencil button in the top right of the github window to edit the file directly - and save

This will prompt you to create a pull-request directly from this temporarily created branch, and is quick and easy :)

### For a larger change (creating new files, long running development)

#### Setting up your fork on your local machine

Browse to the main [tidal-doc repository](https://github.com/tidalcycles/tidal-doc) and click the `Fork` button at the top right. This will create a fork in your personal github repository (if you don't have one, create one now). I personally like to add my username as a suffix to the fork name, so I can clearly distinguish between the **upstream** (official) tidal-docs and my personal fork, since I may work with both.

Clone your new fork on your local computer, and using the (git) commandline change directory to the forked repo
```
$ git clone https://github.com/<your user>/tidal-doc-username
$ cd tidal-doc-username
```

Since this may be a long running development, we will want to keep in touch with the **upstream** repository otherwise ours may drift significantly and it'll be difficult to merge back. 

To aid this, we add a second **remote** or second external repository pointing to the **upstream** tidal-doc repo from which we can fetch new/the latest commits - we also call it `upstream`

To begin, check what remote(s) currently exist for your fork - this should only return fetch and push urls, called `origin`

```
$ git remote -v
origin  https://github.com/<username>/tidal-doc-<username>.git (fetch)
origin  https://github.com/<username>/tidal-doc-<username>.git (push)
```

Add the **upstream** tidal-doc repository as another remote we can keep in touch with, and call it `upstream`:
```
git remote add upstream https://github.com/tidalcycles/tidal-doc.git
```

Check what remotes now exist:
```
$ git remote -v
origin  https://github.com/<username>/tidal-doc-<username>.git (fetch)
origin  https://github.com/<username>/tidal-doc-<username>.git (push)
upstream        https://github.com/tidalcycles/tidal-doc.git (fetch)
upstream        https://github.com/tidalcycles/tidal-doc.git (push)
```

Check what branches you have:
```
$ git branch
* main
```

We're set! 

#### Workflow for creating a new feature/patch branch

The broad scope plan for our local checkout, will be to not really use our local `main` branch (aka `origin/main`). Any feature/patch branches will be created from the current `upstream/main` in order to reduce the risk of accidentally adding extra commits we didn't mean to 

Let's create our first feature branch - it could be a new section dedicated to midi-3.0 (fictional, of course!)

Firstly, make sure we have the latest changes from `upstream/origin` - Checkout/change branch to `upstream/main`
```
$ git checkout upstream/main
```

"pull" the latest changes from `upstream/main`
```
$ git pull upstream main
```

Create our new feature/patch branch based on `upstream/main` for it's starting point
```
$ git checkout -b midi3-0_feature
```

Make sure we are tracking it on our github account, so it's ready for Pull Requests to the upstream tidal-doc repo
```
git push --set-upstream origin midi3-0_feature
```

*Note, just running 'git push' will tell you the full command you need*

We're done! You can begin working, and pushing commits to your github repo. You can also create as many of these patch/feature branches as you need - they won't get in each other's way
