# proto.vroy.ca

This is the folder structure I am using to start new vroy.ca apps. It's easy to use:

    cp -r proto.vroy.ca new-app.vroy.ca
    cd new-app.vroy.ca
    grep -r -i 'proto' * | grep 'vroy.ca' # To find all instances of proto that matches with the app name
    # Replace all instances of proto where it's actually the app name to be the name of your new app
    
The same thing goes with everything in the rest of the documentation below, replace every instances of proto to be the name of the new app.

## Git

On the server:

    cd ~/repos/
    mkdir proto.vroy.ca.git
    cd proto.vroy.ca.git
    git --bare init

    cd ~/www/
    git clone ~/repos/proto.vroy.ca.git
    git remote add git@github.com:exploid/proto.vroy.ca.git

### Pushing and deploys

Since these are not critical websites, having an easy way to push from a local clone to the server and having the changes deployed can be fun. To set this up, I followed the instructions from this post: http://joemaller.com/990/a-web-focused-git-workflow/

In the bare repo we have to setup the following post-update hook `~/repos/proto.vroy.ca.git/hooks/post-update` (make sure it's executable):

    #!/bin/sh
    cd $HOME/www/proto.vroy.ca || exit
    unset GIT_DIR
    git pull hub master
    touch tmp/restart.txt

    exec git-update-server-info

In the actual website version of the repo, we have to setup the following post-commit hook to avoid conflicts in the history when work is being done straight on the server. In `~/www/proto.vroy.ca/.git/hooks/post-commit` (make sure it's executable), place the following:

    #!/bin/sh
    git push hub
