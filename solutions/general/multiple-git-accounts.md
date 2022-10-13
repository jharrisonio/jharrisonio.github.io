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

### Testing
To test everything is working properly, run these commands:

`$ ssh -vT git@github.com`

`$ ssh-vT git@work.github.com`

Check that each command authenticates with the correct credentials. Below is an example output that shows authentication was made with user `jharrisonio`. 

```
...
debug1: client_input_channel_req: channel 0 rtype exit-status reply 0
Hi jharrisonio! You've successfully authenticated, but GitHub does not provide shell access.
debug1: channel 0: free: client-session, nchannels 1
Transferred: sent 3188, received 3120 bytes, in 0.2 seconds
Bytes per second: sent 15774.7, received 15438.2
debug1: Exit status 1
```