# Multiple Git accounts on a single machine
Occasionally there is a need to authenticate to Github or Bitbucket with different user accounts for different repos. For example, work versus personal accounts.

This can be achieved as simply as editing your SSH config at `~/.ssh/config` as follows.

Using Github as an example, the following setup would allow two different users to connect by using different hostnames for each account, e.g. `github.com` for personal and `work.github.com`.

```
Host me.github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile /path/to/your/.ssh/private-key
    UseKeychain yes
    AddKeysToAgent yes

Host work.github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile /path/to/your/.ssh/work-private-key
    UseKeychain yes
    AddKeysToAgent yes
```