1、安装：
下载安装：http://msysgit.github.com/

    设置，在命令行输入：git config --global user.name "Your Name"
git config --global user.email "email@example.com"
（1.mkdir learngit   //创建一个learngit空文件夹     2.cd learngit           3.pwd   //显示当前目录）



2、git init        初始化新仓库

3、git add readme.txt            	用命令git add告诉Git，把文件添加到仓库

4、git commit -m "wrote a readme file"               把文件提交到仓库 ,-m后面输入的是本次提交的说明

6、git status    工作区的状态

7、git diff        查看修改内容

8、git log        显示从最近到最远的提交日志(3次提交)

9、git reset --hard commit_id       版本回归命令    commit_id版本号没必要写全，前几位就可以了
git reset HEAD file       只是做了修改，git add 但是没有操作git commit,此命令可以把暂存区的修改撤销掉（unstage），重新放回工作区
git reset       命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。

10、git checkout -- file      git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销


11、git reflog    记录你的每一次命令

12、git rm file    从版本库中删除该文件  并且git commit -m "remove test.txt"

克隆代码：git clone [远程地址]


提交到远程：

连接远程：git remote add origin [远程地址]

更新到本地：git pull origin master

更新到远程：git pull origin master


Git鼓励大量使用分支：

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>




  
