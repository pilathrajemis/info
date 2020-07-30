# Github - useful cmd


## How do I force “git pull” to overwrite local files?

Important: If you have any local changes, they will be lost. With or without --hard option, any local commits that haven't been pushed will be lost.[*]
If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

I think this is the right way:
```shell
git fetch --all
```
Then, you have two options:
```shell
git reset --hard origin/master
```
OR If you are on some other branch:
```shell
git reset --hard origin/<branch_name>
```

## How get remote modified files into local
```cmd
git checkout master
git pull origin master
```

### Delete a Local GIT branch
```shell
git branch -d branch_name
git branch -D branch_name
```

### How to commit the new code on new branch

```cmd
git checkout -b fix-deploy
git add -A 
git commit -m "deploy fix added"
git push origin fix-deploy
```


## How to handle locally renamed file would affect remote.
 ```error
 Changes to be committed:
 (use "git reset HEAD <file>..." to unstage)
 renamed:    add-sum-func/main.go -> sum-func/main.go
 renamed:    add-sum-func/readme.md -> sum-func/readme.md
 ```
 
you have to git add sum-func/main.go
the new file and git rm sum-func/main.go, 
so git knows about it. 
then it will show the same output in git status

## How to remove local commit

Delete the most recent commit, keeping the work you've done:

```cmd
git reset --soft HEAD~1
```

Delete the most recent commit, destroying the work you've done:

```cmd
git reset --hard HEAD~1
```
## Log
```cmd
 git log --since=2019-09-30 --before=2019-10-18
```
## Contribution 
- Fork it
- Download your fork to your PC (git clone https://github.com/your_username/p1 && cd p1)
- Create your feature branch (git checkout -b my-new-feature)
- Make changes and add them (git add .)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create new pull request
## Rename the folder
```cmd
git mv oldfolder newfolder
git add -u newfolder
git commit -m "changed the foldername whaddup"
```
**Renaming foldername to folderName on case insensitive file systems**
```cmd
git mv foldername tempname && git mv tempname folderName
```
## Record the current state of the working directory and the index
```cmd
git stash 
git stash list
```
## Rebase
```cmd
git log --oneline
git rebase -i {Id before my ids}
change to "s" any to get rid of - Need to leave first commit.
save / come out
remove any stray logs / change etc...
git push --force origin {branch}
```

