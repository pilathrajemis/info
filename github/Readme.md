#

git fetch --all
git reset --hard origin/master
git pull origin master


# How do I force “git pull” to overwrite local files?

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